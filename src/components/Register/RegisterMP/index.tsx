import { Link } from "react-router-dom"
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";
import styles from "./RegisterMP.module.scss"
import { useState } from "react";
import { api } from "../../../services/servicesApi";
import { RegisterSucessPage } from "../../../pages/Private/RegisterPage/RegisterSucessPage";

export const RegisterMP = () => {
    const [idMp , setIdMp] = useState("")
    const [size , setSize] = useState("")
    const [weight , setWeight] = useState("")
    const [type , setType] = useState("")
    const [verify , setVerify] = useState(Boolean)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        api.post('/feedstock', {
                admin: 1,
                type: type,
                size: size,
                weight: weight,
                id_mp: idMp

            })
            .then(function (response){
                setVerify(true)
            })
    }

    if(verify === true){
        console.log("Cadastrado")
        return <RegisterSucessPage/>
    }

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
                <h1 className={styles.subtitle__content}>Matéria Prima</h1>
            </div>
            <form className={styles.main__form} onSubmit={handleSubmit}>
                <label className={styles.label__main} htmlFor="">
                    Id Matéria Prima:
                    <input 
                        className={styles.input__main} 
                        type="text"
                        name="idmp"
                        value={idMp}
                        onChange = {(event) => setIdMp(event.target.value)}
                    />
                </label>
                <label className={styles.label__main} htmlFor="">
                    Medida:
                    <input 
                        className={styles.input__main} 
                        type="text" 
                        name="size"
                        value={size}
                        onChange = {(event) => setSize(event.target.value)}
                    />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Peso:
                    <input 
                        className={styles.input__main} 
                        type="text"
                        name="weight"
                        value={weight}
                        onChange = {(event) => setWeight(event.target.value)}
                    />
                </label>
                <label className={styles.label__second} htmlFor="">
                    Tipo:
                    <input 
                        className={styles.input__main} 
                        type="text"
                        name="idmp"
                        value={type}
                        onChange = {(event) => setType(event.target.value)}
                    />
                </label>
                <div className={styles.div__button}>
                    <button className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
        </div>
    )
}