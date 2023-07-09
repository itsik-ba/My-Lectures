import { Link } from "react-router-dom"



const NavBar = () => {
  return (
    <nav>
        <Link to={"/courses"} className="">כנסים</Link>

        <Link to={"classes"} className="">חוגים</Link>

        <Link to={"lecture"} className="">הרצאות</Link>

        <Link to={"/"} className="">הבית</Link>

    </nav>
  )
}

export default NavBar