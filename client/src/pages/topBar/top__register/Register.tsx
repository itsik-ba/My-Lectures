import "./style/register.scss";
import MultiSelect from './Register_Multi';
import React, { useState } from "react";

interface SelectOption {
  value: string;
  label: string;
}
  const options = [
    { value: 'היסטוריה ופילוסופיה', label: 'היסטוריה ופילוסופיה' },
    { value: 'בריאות', label: 'בריאות' },
    { value: 'מדע', label: 'מדע' },
    { value: 'ספורט', label: 'ספורט' },
    { value: 'תנ״ך', label: 'תנ״ך' },
    { value: 'ספרים', label: 'ספרים' },
    { value: 'טבע', label: 'טבע' },
    { value: 'חיות', label: 'חיות' },
    { value: 'בדיוני', label: 'בדיוני' },
    { value: 'הורות וילדים', label: 'הורות וילדים' },
    { value: 'טכנולוגיה', label: 'טכנולוגיה' },
    { value: 'לייף סטייל', label: 'לייף סטייל' },
  ];

  const Register: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<SelectOption[]>([]);
  
  const handleMultiSelectChange = (selectedOptions: SelectOption[]) => {
    setSelectedOptions(selectedOptions);
  };


  return (
    <div className="register">
      <div className="register__card">
        <h2 className="register__card__h2">הרשמה</h2>

        <form className="register__card__form">
        <label className="register__card__form__label">שם מלא</label>
        <input 
        type="text" 
        className="register__card__form__input" 
        name="name" />  

        <label className="register__card__form__label">טלפון</label>
        <input 
        type="tel" 
        className="register__card__form__input" 
        name="tel" /> 

        <label className="register__card__form__label">מייל</label>
        <input 
        type="email" 
        className="register__card__form__input" 
        name="email"/> 

        <label className="register__card__form__label">כתובת</label>
        <input
         type="text" 
         className="register__card__form__input" name="address" />  

        <label className="register__card__form__label">סיסמה</label>
        <input 
        type="password" 
        className="register__card__form__input" name="password" />  

        <div className="choose">
          <h3 className="choose__h3">
            בחר את תחומי העניין שלך
          </h3>
          </div>


        <div>
          <MultiSelect
            options={options}
            value={selectedOptions}
            onChange={handleMultiSelectChange}
            className="register__card__form__select" 
          />
        </div>

          <button className="register__card__form__btn" type="submit">הרשם</button>

        </form>
      </div>
    </div>
  )
}

export default Register
{/* 
          <input 
          type="radio" 
          name="history" 
          value="history" />
           היסטוריה ופילוסופיה

          <input 
          type="radio" 
          name="tourses" 
          value="tourses" />
          טיולים 

          <input 
          type="radio" 
          name="neture" 
          value="neture" />
           טבע 
          
          <input 
          type="radio" 
          name="bible" 
          value="bible" />
          תנ״ך
          
          <input 
          type="radio" 
          name="computer" 
          value="computer" />
          מחשבים 
          
          <input 
          type="radio" 
          name="books" 
          value="books" />
          ספרים
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          בריאות
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          תזונה
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
           יחסים
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
           ספורט
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          אקטואליה ותקשורת
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          קריירה
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          הורות וילדים
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          טכנולוגיה ועתיד
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          בדיוני
         
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          עסקים וכלכלה
         
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          יזמות 
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          קולנוע והופעות
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          מוסיקה
          
          <input 
          type="radio" 
          name="myRadio" 
          value="option3" />
          לייף סטייל */}
