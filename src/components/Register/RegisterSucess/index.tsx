import { Link } from "react-router-dom"
import styles from "./RegisterSucess.module.scss"
import { MdArrowBackIosNew as BackIcon } from "react-icons/md";

export const RegisterSucess = () =>{
    return(
        <div>
            <div className={styles.button__register}>
                <Link to={"/register"} className={styles.button__back}>
                    <BackIcon size={30}/>
                </Link>
            </div>
            <div className={styles.title__page}>
                <h1 className={styles.title__content}>Cadastrar</h1>
            </div>
            <div className={styles.h1__mensage}>
                <h1 className={styles.h1__content}>Cadastrado com sucesso</h1>
            </div>
            <div className={styles.buttons__link}>
                <Link className={styles.register__link} to={"/register"}>Cadastrar Novamente</Link>
                <Link className={styles.register__link} to={"/"}>Voltar ao menu</Link>
            </div>
        </div>
    )
}