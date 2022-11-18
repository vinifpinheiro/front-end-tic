import styles from './MenuComponent.module.scss'
import { MdLogout } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

export const MenuComponent = () => {
    const { logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    };
    return(
        <div>
            <div className={styles.logout}>
                <button onClick={handleLogout} className={styles.button__logout}>
                    <MdLogout size={35}/>
                </button>
            </div>

            <div className={styles.menu__itens}>
                <ul className={styles.ul__menus}>
                    <li className={styles.li__registrer}>
                        <Link to={"/register"} className={styles.button__li}>cadastrar</Link>
                    </li>
                    <li className={styles.li__consult}>
                        <Link to={"/consult"} className={styles.button__li}>consultar</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}