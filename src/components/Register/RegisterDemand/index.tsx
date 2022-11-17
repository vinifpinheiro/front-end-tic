import { Link } from 'react-router-dom'
import styles from './RegisterDemand.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";

export const RegisterDemand = () =>{
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
                <h1 className={styles.subtitle__content}>Pedido</h1>
            </div>
            <form className={styles.main__form}>
                <label className={styles.label__main} htmlFor="">
                    Nome do Cliente:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    CPF ou CNPJ:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Produto Desejado:
                    <input className={styles.input__main} type="text" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Numero:
                    <input className={styles.input__main} type="number" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Data:
                    <input className={styles.input__main} type="date" />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Quantidade:
                    <input className={styles.input__main} type="number" />
                </label>
                <div className={styles.div__button}>
                    <button className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
        </div>
    )
}