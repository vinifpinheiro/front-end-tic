import { Link } from "react-router-dom"
import styles from "./ConsultComponent.module.scss"
import { MdArrowBackIosNew as BackIcon } from "react-icons/md";

export const ConsultComponent = () => {
    return(
        <div>
            <div className={styles.h1__register}>
                <h1 className={styles.h1__content}>Consultar</h1>
            </div>
            <div className={styles.menu__register}>
                <ul className={styles.ul__menu}>
                    <li className={styles.li__product}>
                        <Link to={"/consult/product"} className={styles.li__menu}>Produto</Link>
                    </li>
                    <li className={styles.li__demand}>
                        <Link to={"/consult/demand"} className={styles.li__menu}>Pedido</Link>
                    </li>
                    <li className={styles.li__mp}>
                        <Link to={"/consult/mp"} className={styles.li__menu}>Matéria Prima</Link>
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