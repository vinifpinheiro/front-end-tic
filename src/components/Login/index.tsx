import { useState } from 'react'
import styles from './LoginComponent.module.scss'
import Logo from '../../images/Icon-Storage.png'

export const LoginComponent = () => {
    const [userName , setUserName] = useState("")
    const [password , setPassword] = useState("")

    // const handleSubmit = (event: { preventDefault: () => void }) => {
    //     event.preventDefault();
    //     login(userName, password);
    //   };

    return (
      <div className={styles.main__div}>
          <img
            className={styles.logo__img}
            src={Logo}
            alt="Storage Admin Logo"
            width={208}
            height={187}
          />
        <div className={styles.welcome__texts}>
          <h1 className={styles.text__h1}>Bem Vindo!</h1>
          <h2 className={styles.text__h2}>Realize login para continuar!</h2>
        </div>
        <form className={styles.login__form}>
          <div className={styles.input__container}>
            <label className={styles.label__name}>Nome</label>
            <input
                className={styles.input__name}
                type="text"
                name="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className={styles.input__container}>
            <label className={styles.label__password}>Senha</label>
            <input
                className={styles.input__password}
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className={styles.button__div}>
            <button className={styles.button__form} type="submit">Entrar</button>
          </div>
        </form>
      </div>
    );
}