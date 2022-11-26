import { Link } from 'react-router-dom'
import styles from './ConsultDemand.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";
import { useState, useEffect } from 'react';
import { api } from '../../../services/servicesApi';
import { IGetDemand } from '../../../interfaces/IGetDemand';

export const ConsultDemand = () =>{
    const [idSearch , setIdSearch] = useState("")
    const [product , setProduct] = useState<IGetDemand>()
    const [verify , setVerify] = useState(Boolean)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        product.Order_Number === idSearch? setVerify(true): console.log("not validated")
    }
    
    useEffect(() =>{
        api
            .get(`/orders?order_id=${idSearch}`)
            .then(response => response.data)
            .then(data => setProduct(data))
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
                        <h1 className={styles.results__h1}>Nº do Pedido: <h1 className={styles.results__api}>{product.Order_Number}</h1></h1>
                        <h1 className={styles.results__h1}>Nº do cliente: <h1 className={styles.results__api}>{product.Client_ID}</h1></h1>
                        <h1 className={styles.results__h1}>Quantidade: <h1 className={styles.results__api}>{product.Itens_quantity}</h1></h1>
                        <h1 className={styles.results__h1}>Data do Pedido: <h1 className={styles.results__api}>{product.Date}</h1></h1>
                    </div>
                </div>
            </div>
        )
    }
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
            <form className={styles.main__form} onSubmit={handleSubmit}>
                <label className={styles.label__main} htmlFor="">
                    Nº do Pedido:
                    <input className={styles.input__main} 
                        type="number"
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