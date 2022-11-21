import { Link } from 'react-router-dom'
import styles from './ConsultDemand.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";

export const ConsultDemand = () =>{
    return(
        <div>
            <div className={styles.button__register}>
                <Link to={"/consult"} className={styles.button__back}>
                    <BackIcon size={30}/>
                </Link>
            </div>
            <div className={styles.title__page}>
                <h1 className={styles.title__content}>Consultar</h1>
            </div>
            <div className={styles.subtitle__page}>
                <h1 className={styles.subtitle__content}>Pedido</h1>
            </div>
            <form className={styles.main__form}>
                <label className={styles.label__main} htmlFor="">
                    Nº do Pedido:
                    <input className={styles.input__main} type="text" />
                </label>
                <div className={styles.div__button}>
                    <button className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
        </div>
    )
}