import React, { useState } from 'react';
import './style/forgotpassword.scss';

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the password reset request here
    console.log('Password reset request for email:', email);
    // You can send an API request or take appropriate action here
  };

  return (  
    <div className="forgotPassword">
        <div className="forgotPassword__card">
          <h2 className="forgotPassword__h2forgotPassword">איפוס סיסמה</h2>
          <form className="forgotPassword__myform" onSubmit={handleSubmit}>
            <label className="forgotPassword__myform__label">דואר אלקטרוני</label> 
              <input className='forgotPassword__myform__email' type="email" value={email} onChange={handleEmailChange} />
            
            <button className='forgotPassword__myform__btn' type="submit">אפס סיסמה</button>
          </form>
        </div>
      </div>
  );
};

export default ForgetPassword;
