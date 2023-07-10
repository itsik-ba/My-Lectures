import "./style/TopNav.scss";
import { Link } from "react-router-dom"

export const TopNav = () => {
  return (
    <div className="TopNav">
     <Link to={"/about"} className="about">אודות</Link>
   
     <Link to={"/search"} className="search">חיפוש</Link>
   
     <span className="icon"> <Link to={"/login"} className="login">התחבר</Link> </span>
   
    
    </div>
  )
}
