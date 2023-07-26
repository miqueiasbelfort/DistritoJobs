import { Link } from 'react-router-dom';
import styles from './SignUp.module.css'

function SignUp() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Cadastrar</h2>
        <div className={styles.form}>
            <div className={styles.input}>
              <input type="text" placeholder='Email'/>
              <div className={styles.inInput}></div>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Senha'/>
              <div className={styles.inInput}></div>
            </div>
            <div className={styles.input}>
              <input type="text" placeholder='Confirmar Senha'/>
              <div className={styles.inInput}></div>
            </div>
        </div>
        
        <div className={styles.signUpContainer}>
          <div className={styles.signUp}>
            <Link to={"/signIn"} id={styles.signUp}>Já tenho uma conta na DistritoJobs</Link>  
          </div>
        </div>
        <div className={styles.btnContainer}>
          <button>Cadastrar</button>
        </div>

        <div className={styles.loginWith}>
          <button className={styles.google}></button>
          <button className={styles.github}></button>
        </div>
      </div>
    </div>
  )
}

export default SignUp;