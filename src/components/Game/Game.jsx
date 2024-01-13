import { useState } from 'react'
// Estilos CSS
import styles from './Game.module.css'
// Componentes JSX
import { Icon } from '../icons/Icons'
import { GameOption } from '../gameOption/GameOption'

//
export const Game = () => {
    const [gameState, setGameState]  = useState(Array(9).fill(0))
    const [currentPlayer, setCurrentPlayer] = useState(1)

    const handleClick = (locality) => {
        if ((gameState[locality]) === 0) {
            let newGameState = [...gameState] // Copiando os valores do gameState no Array -> Sem alterar o original 
            newGameState[locality] = currentPlayer
            setCurrentPlayer(currentPlayer * -1)
            setGameState(newGameState)
        }
    }

    return (
        <div className={styles.gameContent}>
            <div className={styles.game}>
                {
                    gameState.map((value, locality) => 
                        <GameOption 
                            key={`game-option-position=${locality}`} 
                            status={value} 
                            onClick={() => handleClick(locality)} 
                        /> 
                    )
                }
            </div>
            <div className={styles.gameInfo}>
                <h4>Próximo jogador:</h4>
                {
                    currentPlayer === 1 && <Icon iconName="circle" />
                }
                {
                    currentPlayer === -1 && <Icon iconName="x" />
                }
            </div>
        </div>
    )
}
