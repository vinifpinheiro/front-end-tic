import styles from './MenuComponent.module.scss'
import Logo from '../../images/Icon-Storage.png'
import { MdLogout } from "react-icons/md";

export const MenuComponent = () => {
    return(
        <div>
            <div className={styles.logout}>
                <button className={styles.button__logout}>
                    <MdLogout size={35}/>
                </button>
            </div>
            <div className={styles.image__background}>
                <img
                    className={styles.image__fill}
                    src={Logo} 
                    alt="" 
                    width={300}
                    height={300}
                />
            </div>
            <div className={styles.menu__itens}>
                <ul className={styles.ul__menus}>
                    <li className={styles.li__registrer}>
                        <button className={styles.button__registrer}>cadastrar</button>
                    </li>
                    <li className={styles.li__consult}>
                        <button className={styles.button__consult}>consultar</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}