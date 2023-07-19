import "./style/bottomPage.scss"
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const BottomPage = () => {

  const hendelPhonNumber = () => {

  }
  const hendelMail = () => {

  }
  return (
    <div className="bottomPage">
      <div className="bottomPage__icons">
        <button className="bottomPage__icons__btn" onClick={hendelPhonNumber}>
          <ContactPhoneIcon />
        </button>
        <button className="bottomPage__icons__btn" onClick={hendelMail}>
          <ContactMailIcon />
        </button>
      </div>
  </div>
  )
}

export default BottomPage