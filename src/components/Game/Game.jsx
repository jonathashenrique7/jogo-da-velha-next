import styles from './Game.module.css'

import { GameOption } from '../gameOption/GameOption'
//
export const Game = () => {
    return (
        <div className={styles.game}>
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />
            <GameOption />           
            <GameOption />
        </div>
    )
}
