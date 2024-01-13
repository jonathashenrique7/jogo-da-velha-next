import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
import { Icon } from '../icons/Icons'
// CSS 
import styles from './Header.module.css'

// 
export const Header = () => {
    return (
        <div>
            <Title 
                className={styles.header}
            >Jogo Da Velha</Title>
            <Subtitle>Programado por Jonathas H. Pocidonio!</Subtitle>
            <div className={styles.iconContent}>
                <img href='https://github.com/jonathashenrique7' src="/icons/logo.png" alt="github" width="30" height="30" /><br />

                <a href='https://github.com/jonathashenrique7' target='_blank'>
                    GitHub
                </a>
            </div>
        </div>
    )
}

