import { Link } from "react-router-dom"
import "./style/navBar.scss"


const NavBar = () => {
  return (
    <nav className="navBar">

        <Link to={"/"} className="Link">הבית</Link> 
        <Link to={"lecture"} className="Link">הרצאות</Link>
        <Link to={"/courses"} className="Link">קורסים</Link>
        <Link to={"classes"} className="Link">סיורים</Link>

    </nav>
  )
}

export default NavBar