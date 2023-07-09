import "./style/TopNav.scss";
import { Link } from "react-router-dom"

export const TopNav = () => {
  return (
    <div className="TopNav">
     <Link to={"/about"} className="about">אודות</Link>
   
     <Link to={"/search"} className="about">חיפוש</Link>
   
     <Link to={"/login"} className="about">התחבר</Link>
   
    
    </div>
  )
}
