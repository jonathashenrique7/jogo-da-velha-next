// Estilos -> CSS 
import styles from './Gameinfo.module.css'
// Componentes -> JSX
import { Icon } from '../icons/Icons'
import { Button } from '../button/Button'

//
export const GameInfo = ({ currentPlayer, winner, onReset }) => {

    const showEnableButton = () => {
        if (winner !== 0) return true
    }

    return (
        <div className={styles.gameInfo}>
            {
                winner === 0 && 
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
                winner !== 0 && 
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
            <Button
                onClick={onReset}
                disabled={!showEnableButton()}
            >
                Reiniciar!
            </Button>
        </div>
    )
}
