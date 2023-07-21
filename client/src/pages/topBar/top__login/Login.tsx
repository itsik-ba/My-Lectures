import "./style/login.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"
import React  from "react"

const Login: React.FC = () => {

  const userLogin = () =>{
  }


  return (
    <div className="login">
     <div className="login__card">
       <h2 className="login__h2login">התחברות</h2>
       <form className="login__myform" onSubmit={userLogin}>
        <label 
        className="login__myform__label">דואר אלקטרוני</label> 
        

      <div className='login__myform__input'>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="login__myform__input__icon"
          
        />
        <span>  </span>
        <input
          type="email"
          className="login__myform__input__userinput" 
          required
          
        />
        
      </div>
        <label className="login__myform__label">סיסמה</label>


      <div className='login__myform__input'>
        <FontAwesomeIcon
          icon={faUserSecret}
          className="login__myform__input__icon"
          
        />
        <span>  </span>
        <input
          type="password"
          name="password"
          className="login__myform__input__userinput" 
          required
          
        />
        
      </div>




        {/* <FontAwesomeIcon icon={faUserSecret} className="pass" />
        <input type="password"  name="password"  className="login__myform__userpassword" required/> */}
          <button type="submit" className="login__myform__btn">התחבר</button>

          <div className="forgotPassword">

          <Link to={"/register"} className="forgotPassword__link">הרשמה</Link>

          <Link to={"/forgotPassword"} className="forgotPassword__link">שכחתי סיסמה</Link> 
          </div>
         
       </form>
      </div>
      
    </div>
  )
}

export default Login