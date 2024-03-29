import { useState, useEffect } from 'react'
// Estilos CSS
import styles from './Game.module.css'
// Componentes JSX
import { Score } from '../score/Score'
import { GameInfo } from '../gameInfo/GameInfo'
import { GameOption } from '../gameOption/GameOption'


const winnerTable = [ // Sequências numéricas para finalizar o jogo 
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

export const Game = () => {
    const [gameState, setGameState]  = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(-1)
    const [winner, setWinner] = useState(0)
    const [draw, setDraw] = useState(false)
    const [xWinnerTimes, setXWinnerTimes] = useState(0)
    const [circleWinnerTimes, setCircleWinnerTimes] = useState(0)

    const handleClick = (locality) => {
        if ((gameState[locality]) === 0 && winner === 0) {
            let newGameState = [...gameState] // Copiando os valores do gameState no Array -> Sem alterar o original 
            newGameState[locality] = currentPlayer
            setGameState(newGameState)
        }
    }

    const verifyDraw = () => {
        if (gameState.filter((value) => value === 0).length === 0 && winner === 0) {
            setDraw(true)
        }
    }

    const handleReset = () => {
        setGameState(Array(9).fill(0))
        setWinner(0)
        setDraw(false)
    }

    const verifyGame = () => {
        winnerTable.forEach(( element ) => {
            const values = element.map((value) => gameState[value])
            const sum = values.reduce((sum, value) => sum + value, 0) // Declare a constante no plural -> fn -> Singular
            
            if (sum === 3 || sum === -3) {
                setWinner(sum / 3) 
                // Lógica condicional ternária -> Código de tamanho reduzido 
                sum > 0 ? setCircleWinnerTimes(circleWinnerTimes + 1) : setXWinnerTimes(xWinnerTimes + 1)
            }
        })
    }

    useEffect(() => {
        setCurrentPlayer(currentPlayer * -1)
        verifyGame()
        verifyDraw()
    }, [gameState]) // VIRTUAL DOM -> Quando o gameState for alterado, a função no useEffect será acionada 
    
    useEffect(() => {
        if (winner !== 0) setDraw(false)
    }, [winner])

    return ( // Utiliza-se a função "onReset" no lugar de "onClick" -> "useState" na forma inicial 
        <>
            <div className={styles.gameContent}> 
                <div className={styles.game}>
                    {
                        gameState.map((value, locality) => 
                            <GameOption 
                                key={`game-option-position=${locality}`} 
                                status={value} 
                                onClick={() => handleClick(locality)} 
                                isDraw={draw}
                            /> 
                        )
                    }
                </div>
                <GameInfo currentPlayer={currentPlayer} winner={winner} onReset={handleReset} isDraw={draw} />
            </div>

            <Score 
                xWinnerTimes={xWinnerTimes}
                circleWinnerTimes={circleWinnerTimes}
            />
        </>
    )
}
