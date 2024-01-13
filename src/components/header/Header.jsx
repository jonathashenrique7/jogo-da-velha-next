import Title from '../title/Title'
import Subtitle from '../subtitle/Subtitle'
// CSS 
import styles from './Header.module.css'

// 
export const Header = () => {
    return (
        <div>
            <Title 
                className={styles.header}
            >Jogo Da Velha</Title>
            <Subtitle>Lorem ipsum </Subtitle>
        </div>
    )
}

