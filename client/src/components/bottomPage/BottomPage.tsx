import "./style/bottomPage.scss"
// import ContactPhoneIcon    from '@mui/icons-material/ContactPhone';
// import ContactMailIcon from '@mui/icons-material/ContactMail';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Padding } from "@mui/icons-material";
// import { MyLocation } from "@mui/icons-material";

const BottomPage = () => {
  const contactEmail = 'MyLecturesProject2023.com';

  const contactLinkClick = () => {
    window.location.href = `mailto:${contactEmail}`;
  };
  return (
    <div className="bottomPage">
      <div className="bottomPage__text">
      <div>
            <AlternateEmailIcon />
          <span>    </span>
          <a href={`mailto:${contactEmail}`} onClick={contactLinkClick}>
             צור קשר
           </a>
        </div>  
        <div>
            My-Lectures-Project 2023 All rights reserved  
            <span>  </span>
          <CopyrightIcon/>
          
        </div>
      </div>
  </div>
  )
}

export default BottomPage