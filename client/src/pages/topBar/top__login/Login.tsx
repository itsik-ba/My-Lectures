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
     <div className="card">

       <h2 className="card__h2login">התחברות</h2>

       <form className="card__myform" onSubmit={userLogin}>
        
        <label 
        className="card__myform__label">דואר אלקטרוני</label> 
        

      <div className='card__myform__input'>
        <FontAwesomeIcon
          icon={faEnvelope}
          className="card__myform__input__icon"
          
        />
        <span>  </span>
        <input
          type="email"
          className="card__myform__input__userinput" 
          required/>
        </div>

        <label className="card__myform__label">סיסמה</label>


      <div className='card__myform__input'>
        <FontAwesomeIcon
          icon={faUserSecret}
          className="login__myform__input__icon"
          
        />
        <span>  </span>
        <input
          type="password"
          name="password"
          className="card__myform__input__userinput" 
          required />
        
      </div>

         <button type="submit" className="card__myform__btn">התחבר</button>

          <div className="card__forgotPassword">

          <Link to={"/register"} className="forgotPassword__link">הרשמה</Link>

          <Link to={"/forgotPassword"} className="forgotPassword__link">שכחתי סיסמה</Link> 
          </div>
         
       </form>
      </div>
      
    </div>
  )
}

export default Login