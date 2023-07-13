import "./style/TopNav.scss";
// import React from "react";
import { Link } from "react-router-dom"

// export const TopNav: React.FC = ({ children }) = () => {
export const TopNav = () => {
  return (
    <div className="TopNav">
      <Link to={"/about"} className="about">אודות</Link>
    
      <Link to={"/search"} className="about">חיפוש</Link>
    
      <span className="icon"> <Link to={"/login"} className="about">התחבר</Link> </span>
   
    </div>

  )
}
