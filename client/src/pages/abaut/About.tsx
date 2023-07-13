import "./style/about.scss"


const About = () => {
  try {
    const aboutText1 = 'אנחנו אוספים פעילויות העשרה (קורסים, סיורים והרצאות) המתקיימים במקומות שונים בארץ.';
    const aboutText2 = 'את פעילויות העשרה אפשר למיין לפי תאריך, מיקום, זמן, מרצה / מדריך, לאיזה גיל מתאימה הפעילות ומחיר הפעילות. ';
    const aboutText3 = 'לאחר כניסת משתמש יוכל המשתמש לראות את כל הפעילויות שנרשם או כבר היה בהם, כמה שילם על הפעילויות ואף להוסיף את הפעילות ללוח השנה. ';
    const aboutText4 = 'בפעילויות העשרה בתשלום יועבר המשתמש לדף הפעילות בכדי שיוכל לשלם שם ואז תרשם הפעילות ותתווסף ללוח השנה.';
    // const aboutText = aboutText1 + '\n' + aboutText2 + '\n' + aboutText3 + '\n' + aboutText4;

    return (
      <div className="main">
          <div className="about__container">
            <div className="about__content">
              <h1 className="about__title">אודות האפליקציה</h1>
              <p className="about__text">{aboutText1}</p>
              <p className="about__text">{aboutText2}</p>
              <p className="about__text">{aboutText3}</p>
              <p className="about__text">{aboutText4}</p>
              
            </div>
          </div>     
      </div>
    )

} catch (error) {
    console.error(error)    
}

}

export default About