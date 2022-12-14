import { Link } from 'react-router-dom'
import styles from './ConsultProduct.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";
import { useState , useEffect } from 'react';
import { api } from '../../../services/servicesApi';
import { IGetProduct } from '../../../interfaces/IGetProduct';

export const ConsultProduct = () =>{
    const [idSearch , setIdSearch] = useState("")
    const [product , setProduct] = useState<IGetProduct>()
    const [verify , setVerify] = useState(Boolean)
    
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        product.Product_ID === idSearch? setVerify(true): console.log("not validated")
    }

    useEffect(() =>{
        api
            .get(`/product?product_id=${idSearch}`)
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
                        <div className={styles.teste}>
                        <h1 className={styles.results__h1}>Id Produto: <h1 className={styles.results__api}>{product.Product_ID}</h1></h1>
                        </div>
                        <h1 className={styles.results__h1}>Descrição do produto: <h1 className={styles.results__api}>{product.Description}</h1></h1>
                        <h1 className={styles.results__h1}>Familia:<h1 className={styles.results__api}>{product.Family}</h1></h1>
                        <h1 className={styles.results__h1}>Modelo: <h1 className={styles.results__api}>{product.Model}</h1></h1>
                        <h1 className={styles.results__h1}>Valor:  <h1 className={styles.results__api}>R$: {product.Price}</h1></h1>
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
                <h1 className={styles.subtitle__content}>Produto</h1>
            </div>
            <form className={styles.main__form} onSubmit={handleSubmit}>
                <label className={styles.label__main} htmlFor="">
                    Id do Produto:
                    <input 
                        className={styles.input__main} 
                        type="text" 
                        name='idsearch'
                        value={idSearch}
                        onChange = {(event) => setIdSearch(event.target.value)}
                    />
                </label>
                <div className={styles.div__button}>
                    <button type='submit' className={styles.button__confirm}><MdDone size={45} className={styles.button__icon}/></button>
                </div>
            </form>
            
        </div>
    )
}