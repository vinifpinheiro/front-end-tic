import { Link } from 'react-router-dom'
import styles from './ConsultMp.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";
import { useEffect, useState } from 'react';
import { api } from '../../../services/servicesApi';
import { IGetMp } from '../../../interfaces/IGetMp';

export const ConsultMp = () => {

    const [idSearch , setIdSearch] = useState("")
    const [Mp , setMp] = useState<IGetMp>()
    const [verify , setVerify] = useState(Boolean)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        Mp.FeedId === idSearch? setVerify(true): console.log("not validated")
    }

    useEffect(() =>{
        api
            .get(`/feedstock?feed_id=${idSearch}`)
            .then(response => response.data)
            .then(data => setMp(data))
            
    },[idSearch])

    if(verify === true){
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
                <div className={styles.buttons__link}>
                    <Link className={styles.register__link} to={"/consult"}>Realizar Nova Consulta</Link>
                    <Link className={styles.register__link} to={"/"}>Voltar ao menu</Link>
                </div>
                <div className={styles.main__results}> 
                    <div className={styles.results}>
                        <h1 className={styles.results__h1}>Id Máteria Prima: <h1 className={styles.results__api}>{Mp.FeedId}</h1></h1>
                        <h1 className={styles.results__h1}>Peso: <h1 className={styles.results__api}>{Mp.Weight}</h1></h1>
                        <h1 className={styles.results__h1}>Medida: <h1 className={styles.results__api}>{Mp.Size}</h1></h1>
                        <h1 className={styles.results__h1}>Tipo: <h1 className={styles.results__api}>{Mp.Type}</h1></h1>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            <div className={styles.button__register} onSubmit={handleSubmit}>
                <Link to={"/consult"} className={styles.button__back}>
                    <BackIcon size={30}/>
                </Link>
            </div>
            <div className={styles.title__page}>
                <h1 className={styles.title__content}>Consultar</h1>
            </div>
            <div className={styles.subtitle__page}>
                <h1 className={styles.subtitle__content}>Matéria Prima</h1>
            </div>
            <form className={styles.main__form} onSubmit={handleSubmit}>
                <label className={styles.label__main} htmlFor="">
                    Id da matéria prima:
                    <input className={styles.input__main} 
                        type="text" 
                        name='idsearch'
                        value={idSearch}
                        onChange = {(event) => setIdSearch(event.target.value)}
                    />
                </label>
                <div className={styles.div__button}>
                    <button className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
        </div>
    )
}