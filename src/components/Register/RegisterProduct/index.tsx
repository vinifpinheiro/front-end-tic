import { Link } from 'react-router-dom'
import styles from './RegisterProduct.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";

export const RegisterProduct = () => {
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
            <div className={styles.subtitle__page}>
                <h1 className={styles.subtitle__content}>Produto</h1>
            </div>
            <form className={styles.main__form}>
                <label className={styles.label__main} htmlFor="">
                    Id Produto:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Descrição do Produto:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Familia:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Modelo
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Quantidade:
                    <input className={styles.input__main} type="number" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Valor:
                    <input className={styles.input__main} type="number" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Peso:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Altura:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Saida:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Frente da Broca:
                    <input className={styles.input__main} type="text" />
                </label>
                <div className={styles.div__button}>
                    <button className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
        </div>
    )
}