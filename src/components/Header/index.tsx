import Logo from '../../assets/images/Icon-Storage.png'
import styles from './Header.module.scss'

export const Header = () => {
    return(
        <header className={styles.header__menu}>
            <img
                className={styles.logo__storage}
                src={Logo} 
                alt="Logo Storage Admin"
                width={120}
                height={120}  
            />        
        </header>
    )
}