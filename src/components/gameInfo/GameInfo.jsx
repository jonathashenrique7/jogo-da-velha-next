// Estilos -> CSS 
import styles from './Gameinfo.module.css'
// Componentes -> JSX
import { Icon } from '../icons/Icons'
import { Button } from '../button/Button'


export const GameInfo = ({ currentPlayer, winner, onReset, isDraw }) => {
    
    const showEnableButton = () => {
        if (winner !== 0) return true
        if (isDraw) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
                !isDraw && winner === 0 && 
                <>
                    <h4>Próximo jogador:</h4>
                    {
                        currentPlayer === 1 && <Icon iconName="circle" />
                    }
                    {
                        currentPlayer === -1 && <Icon iconName="x" />
                    }
                </>
            }
            {
                !isDraw && winner !== 0 && 
                <> 
                    <h4>Jogo finalizado! Campeão: </h4>
                    {
                        winner === 1 && <Icon iconName="circle" />
                    }
                    {
                        winner === -1 && <Icon iconName="x" />
                    }
                </> 
            }
            {
                isDraw && <h4>Jogo empatado! Reiniciar: </h4>
            }
            <Button
                onClick={onReset}
                disabled={!showEnableButton()}
            >
                Reiniciar!
            </Button>
        </div>
    )
}
