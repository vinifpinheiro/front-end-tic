import { Link } from "react-router-dom"
import styles from "./RegisterComponent.module.scss"

export const RegisterComponent = () => {
    return(
        <div>
            <div className={styles.h1__register}>
                <h1>Cadastrar</h1>
            </div>
            <div className={styles.menu__register}>
                <ul className={styles.ul__menu}>
                    <li>
                        <Link to={"/register/product"} className={styles.li_menu}>Produto</Link>
                    </li>
                    <li>
                        <Link to={"/register/product"} className={styles.li_menu}>Produto</Link>
                    </li>
                    <li>
                        <Link to={"/register/product"} className={styles.li_menu}>Produto</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}