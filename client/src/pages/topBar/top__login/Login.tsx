import "./style/login.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUserSecret } from '@fortawesome/free-solid-svg-icons'


const Login = () => {

const userLogin = () =>{

}

  return (
    <div className="login">
     <div className="login__card">
       <h2 className="login__h2login">התחברות</h2>
       <form className="login__myform" onSubmit={userLogin}>
        <label 
        className="login__myform__label">דואר אלקטרוני</label> 
        <FontAwesomeIcon icon={faEnvelope} className="email" /> <input type="email" name="email"    className="login__myform__useremail" required />
        <label className="login__myform__label">סיסמה</label>
        <FontAwesomeIcon icon={faUserSecret} className="pass" />
        <input type="password"  name="password"  className="login__myform__userpassword" required/>
          <button type="submit" className="login__myform__btn">התחבר</button>
          <div className="forgotPassword">
          <a href="http://" className="forgotPassword__link">הרשמה</a> 
          <a href="http://" className="forgotPassword__link">שכחתי סיסמה</a> 
          </div>
         
       </form>
      </div>
      
    </div>
  )
}

export default Login