import styles from './Button.module.css'

// Lembre-se -> JavaScript segue o padrão CamelCase 
export const Button = ({ children, onClick, disabled })  => {
    return (
        <button 
            className={styles.button} 
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
