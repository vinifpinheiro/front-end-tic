import { Link } from 'react-router-dom'
import styles from './ConsultProduct.module.scss'
import { MdArrowBackIosNew as BackIcon , MdDone } from "react-icons/md";
import { useState , useEffect } from 'react';
import { apitest } from '../../../services/servicesApi';
import { IGetProduct } from '../../../interfaces/IGetProduct';

export const ConsultProduct = () =>{
    const [idSearch , setIdSearch] = useState("")
    const [getData , setGetData] = useState<IGetProduct[]>([])
    const [verify , setVerify] = useState(Boolean)

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        
        getData.map((getData) =>{
            if(getData.name === idSearch){
                setVerify(true)
                console.log(verify)
            }
            else{
                console.log("error")
            }
        })
    }

    useEffect(()=> {
        apitest.get<IGetProduct[]>('/teste')
        .then(response => setGetData(response.data))
    },[])

    if(verify === true){
        return(
            <div>
                {getData.map((getData) =>(
                    <div>
                        <h1>{getData.name}</h1>
                    </div>
                ))}
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
                <h1 className={styles.title__content}>Cadastrar</h1>
            </div>
            <div className={styles.subtitle__page}>
                <h1 className={styles.subtitle__content}>Pedido</h1>
            </div>
            <form className={styles.main__form} onSubmit={handleSubmit}>
                <label className={styles.label__main} htmlFor="">
                    Nome do Produto:
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