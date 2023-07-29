import React, {useState} from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {LiaEyeSlash, LiaEyeSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom';
import '../AuthStyles.css' 

function SignIn() {

  const [passwordType, setPasswordType] = useState(false)

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
  } 

  return (
   <div className="container-divisor-auth">
    <div className='containe-image-left-auth'></div>
    <div className='container-form-auth'>
      <h2>Entrar</h2>
      <p className='subtitle-auth'>Bem-Vindo a <span>DistritoJobs</span>, vamos entrar no mercado juntos!</p>
      <form onSubmit={handleSubmitForm}>
        <div className='container-input-auth'>
          <input 
            type="email" 
            placeholder='Email'
            className='input-auth'
          />
          <div className='input-container-icon-auth'>
            <AiOutlineMail/>
          </div>
        </div>
        <div className='container-input-auth'>
          <input 
            type={passwordType ? 'text' : 'password'}
            placeholder='Senha'
            className='input-auth'
          />
          <div className={`input-container-icon-auth password-auth ${passwordType && 'passowrd-color-active'}`} onClick={() => setPasswordType(!passwordType)}>
            {passwordType ? <LiaEyeSolid/> : <LiaEyeSlash/>}
          </div>
        </div>
        <div className='input-checkbox-save-login-auth'>
          <input type="checkbox" id="save-login"/>
          <label htmlFor="save-login">Manter-me conectado!</label>
        </div>
        <div className='forgout-password-container-auth'>
          <Link to={"/"}>Esqueci minha senha!</Link>
        </div>
        <div className='dont-have-acount-or-have'>
          <Link to={"/signUp"}>Não tenho conta!</Link>
        </div>
        <button className='main-btn-auth' type="submit">Entrar</button>
      </form>
    </div>
   </div>
  )
}

export default SignIn;