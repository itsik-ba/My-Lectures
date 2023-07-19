import "./style/login.scss"



const Login = () => {

const userLogin = () =>{

}

  return (
    <div className="login">
   
      <div className="login__card">
       <h2 className="login__h2login">התחברות</h2>
       <form className="login__myform" onSubmit={userLogin}>
        <label className="login__myform__label">דואר אלטרוני</label>
        <input type="email" name="email"    className="login__myform__useremail" required />
        <label className="login__myform__label">סיסמה</label>
        <input type="password"  name="password"  className="login__myform__userpassword" required/>
          <button type="submit" className="login__myform__btn">התחבר</button>
          <div className="forgotPassword">
          <a href="http://" className="forgotPassword__link">הרשמה</a> 
          <a href="http://" className="forgotPassword__link">שכחתי מייל/סיסמה</a> 
          </div>
         
       </form>
      </div>

    </div>
  )
}

export default Login