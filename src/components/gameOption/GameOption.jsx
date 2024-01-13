import {Icon} from '../icons/Icons'
import styles from './GameOption.module.css'

const GameIcon = ({ iconName }) => <Icon iconName={iconName} size="25px" />

// O alinhamento irá acontecer na "div" -> Trabalhar o CSS no componente "Game"
export const GameOption = ({status}) => {
    return (
        <div className={styles.gameOption}>
            {
                status === 1 && <GameIcon iconName="circle" />
            }
            {
                status === -1 && <GameIcon iconName="x" />
            }
        </div>
    )
}

