import { useState } from 'react'
import styles from './Game.module.css'

import { GameOption } from '../gameOption/GameOption'
//

export const Game = () => {
    const [gameState, setGameState]  = useState(Array(9).fill(0))

    return (
        <div className={styles.game}>
            {
                gameState.map((value, locality) => 
                    <GameOption key={`game-option-position=${locality}`} status={value} /> )
            }
        </div>
    )
}
