import { Link } from 'react-router-dom';
import styles from './SignIn.module.css'

function SignIn() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Entrar</h2>
        <div className={styles.form}>
            <div className={styles.input}>
              <input type="text" placeholder='Email'/>
              <div className={styles.inInput}></div>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Senha'/>
              <div className={styles.inInput}></div>
            </div>
        </div>
        <div className={styles.connect}>
          <input type="checkbox" id='connect'/>
          <label htmlFor="connect">Manter-me conectado!</label>
        </div>
        <div className={styles.forgotPassword}>
          <Link to={"/"}>Esqueci minha senha!</Link>
        </div>
        <div className={styles.signUpContainer}>
          <div className={styles.signUp}>
            <Link to={"/signUp"} id={styles.signUp}>Ainda não tenho uma conta na DistritoJobs</Link>  
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button>Entrar</button>
        </div>

        <div className={styles.loginWith}>
          <button className={styles.google}></button>
          <button className={styles.github}></button>
        </div>
      </div>
    </div>
  )
}

export default SignIn;