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
            <Subtitle>Lorem ipsum </Subtitle>
            <div className={styles.iconContent}>
                <Icon iconName="logo" link={'https://github.com/jonathashenrique7'} />
            </div>
        </div>
    )
}

