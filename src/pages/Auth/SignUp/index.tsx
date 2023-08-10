import React, {useState, useContext} from 'react';
import {AiOutlineMail} from 'react-icons/ai'
import {LiaEyeSlash, LiaEyeSolid} from 'react-icons/lia'
import { Link } from 'react-router-dom';
import { createUser } from '../../../firebase/auth';
import { AppContext } from '../../../context/context';
import '../AuthStyles.css' 

function SignUp() {

  const {setEmail: setEmailContext, setUserId, setIsCompany: setIsCompanyContext} = useContext(AppContext);

  const [passwordType, setPasswordType] = useState(false)
  const [passwordConfirType, setPasswordConfirType] = useState(false);
  
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");
  const [secondPassword, setSecondPasswor] = useState("");
  const [isCompanay, setIsCompany] = useState(false);

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault();
    const user = await createUser(email, passowrd, secondPassword, isCompanay);
    setEmail("");
    setPassword("");
    setSecondPasswor("");
    setIsCompany(false);

    //Context
    setEmailContext(email)
    setUserId(`${user?.uid}`);
    setIsCompanyContext(isCompanay);
    console.log(user?.uid);
  } 

  return (
   <div className="container-divisor-auth">
    <div className='containe-image-left-auth'></div>
    <div className='container-form-auth'>
      <h2>Cadastrar</h2>
      <p className='subtitle-auth'>Bem-Vindo a <span>DistritoJobs</span>, vamos entrar no mercado juntos!</p>
      <form onSubmit={handleSubmitForm}>
        <div className='container-input-auth'>
          <input 
            type="email" 
            placeholder='Email'
            className='input-auth'
            value={email}
            onChange={e => setEmail(e.target.value)}
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
            value={passowrd}
            onChange={e => setPassword(e.target.value)}
          />
          <div className={`input-container-icon-auth password-auth ${passwordType && 'passowrd-color-active'}`} onClick={() => setPasswordType(!passwordType)}>
            {passwordType ? <LiaEyeSolid/> : <LiaEyeSlash/>}
          </div>
        </div>
        <div className='container-input-auth'>
          <input 
            type={passwordConfirType ? 'text' : 'password'}
            placeholder='Confirmar Senha'
            className='input-auth'
            value={secondPassword}
            onChange={e => setSecondPasswor(e.target.value)}
          />
          <div className={`input-container-icon-auth password-auth ${passwordConfirType && 'passowrd-color-active'}`} onClick={() => setPasswordConfirType(!passwordConfirType)}>
            {passwordConfirType ? <LiaEyeSolid/> : <LiaEyeSlash/>}
          </div>
        </div>
        <div className='input-checkbox-save-login-auth'>
          <input type="checkbox" id="save-login" onChange={e => setIsCompany(e.target.checked)} value={isCompanay.toString()}/>
          <label htmlFor="save-login">Sou Empresa!</label>
        </div>
        <div className='dont-have-acount-or-have'>
          <Link to={"/signIn"}>Já tenho uma conta!</Link>
        </div>
        <button className='main-btn-auth' type="submit">Cadastrar</button>
      </form>
    </div>
   </div>
  )
}

export default SignUp;