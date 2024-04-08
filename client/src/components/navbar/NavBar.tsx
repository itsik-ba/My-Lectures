import { NavLink } from "react-router-dom"
import WebLogo from "../WebLogo"


const NavBar = () => {
  
  
    return (
    <main className="py-8 bg-pink-200">

     <div className="flex justify-around text-lg">
      
       <NavLink to="/">הרשמה</NavLink>
       <NavLink to="/">הרצאות</NavLink>
       <NavLink to="/">הצגות</NavLink>
       <NavLink to="/">דף הבית</NavLink>
       <div> <WebLogo /></div>
     </div>    
   </main>
  )
}

export default NavBar