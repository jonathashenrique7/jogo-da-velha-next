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
                <a className={styles.linkContent} href='https://github.com/jonathashenrique7' target='_blank'>
                    GitHub
                </a>
            </div>
        </div>
    )
}
