import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Close } from '@mui/icons-material';
import "./style/about.scss";


const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  // const openPopup = () => {
  //   setIsOpen(true);
  // };

  const closePopup = () => {
    console.log("closed2");
    setIsOpen(false);
  };

  const handleExitClick = () => {
    console.log("closed1");
    closePopup(); 
    window.location.href = '/';
  };



  const aboutText =
    'אנחנו אוספים פעילויות העשרה (קורסים, סיורים והרצאות) המתקיימים במקומות שונים בארץ. \n את פעילויות העשרה אפשר למיין לפי תאריך, מיקום, זמן, מרצה / מדריך, לאיזה גיל מתאימה הפעילות ומחיר הפעילות. \n לאחר כניסת משתמש יוכל המשתמש לראות את כל הפעילויות שנרשם או כבר היה בהם, כמה שילם על הפעילויות ואף להוסיף את הפעילות ללוח השנה. \nבפעילויות העשרה בתשלום יועבר המשתמש לדף הפעילות בכדי שיוכל לשלם שם ואז תרשם הפעילות ותתווסף ללוח השנה.';

  return (
    <div className={`about ${isOpen ? 'open' : ''}`}>
      <div className="about__container">
        <div className="about__btn">
          <IconButton aria-label="Exit" onClick={handleExitClick}>
            <Close />
          </IconButton>
        </div>
        <div className="about__mainText">
          <h1 className="about__mainText__title">אודות האפליקציה</h1>
          {aboutText.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          <p className="about__mainText__text">{aboutText}</p>
        </div>
      </div>
      <div className="popup-overlay" onClick={closePopup}></div>
    </div>
  );
};

export default About;
