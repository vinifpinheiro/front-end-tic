import Logo from '../../assets/images/Icon-Storage.png'
import styles from './ImageBackground.module.scss'

export const ImageBackground = () => {
    return(
        <div className={styles.image__background}>
                <img
                    className={styles.image__fill}
                    src={Logo} 
                    alt="" 
                    width={300}
                    height={300}
                />
        </div>
    )
}