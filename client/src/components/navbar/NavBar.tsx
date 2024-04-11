import { NavLink } from "react-router-dom"
import WebLogo from "../WebLogo"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false);

  const toggle = () =>{
    setIsToggle((prevToggle) => !prevToggle); 
  };
  
  
    return (
    <main className="
     bg-pink-400 text-white xs:h-14 md:h-16">

      <div className="sticky top-0 items-center
      flex xs:justify-around xs:px-4 xs:py-2 xs:text-xl
      md:flex md:justify-evenly md:py-4
      ">

      <div className="sticky top-0
      xs:hidden 
      md:flex md:items-center md:gap-20 ">
       <NavLink to="/register">הרשמה</NavLink>
       <NavLink to="/lectures">הרצאות</NavLink>
       <NavLink to="/shows">הצגות</NavLink>
       <NavLink to="/">דף הבית</NavLink>
       </div>
      
      <div className="xs:text-3xl xs:cursor-pointer
      md:hidden md:disabled 
      "><GiHamburgerMenu onClick={toggle}/></div>
     
     <div className="xs:text-2xl flex justify-center items-center">
         <WebLogo />
        </div>
  </div>
 
  {
    isToggle ?
    <div className="xs:bg-pink-400 xs:py-4 xs:flex xs:justify-evenly md:hidden">
       <NavLink to="/register">הרשמה</NavLink>
       <NavLink to="/lectures">הרצאות</NavLink>
       <NavLink to="/shows">הצגות</NavLink>
       <NavLink to="/">דף הבית</NavLink>
       </div>
       : null
  }
</main>
  )
}

export default NavBar