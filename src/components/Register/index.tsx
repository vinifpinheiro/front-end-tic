import { Link } from "react-router-dom"
import styles from "./RegisterComponent.module.scss"
import { MdArrowBackIosNew as BackIcon } from "react-icons/md";

export const RegisterComponent = () => {
    return(
        <div className={styles.teste}>
            <div className={styles.h1__register}>
                <h1 className={styles.h1__content}>Cadastrar</h1>
            </div>
            <div className={styles.menu__register}>
                <ul className={styles.ul__menu}>
                    <li className={styles.li__product}>
                        <Link to={"/register/product"} className={styles.li__menu}>Produto</Link>
                    </li>
                    <li className={styles.li__demand}>
                        <Link to={"/register/demand"} className={styles.li__menu}>Pedido</Link>
                    </li>
                    <li className={styles.li__mp}>
                        <Link to={"/register/mp"} className={styles.li__menu}>Matéria Prima</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.button__register}>
                <Link to={"/"} className={styles.button__back}>
                    <BackIcon size={30}/>
                </Link>
            </div>
        </div>
    )
}