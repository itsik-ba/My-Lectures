import { Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import HomePage from "./components/home/HomePage"
import Login from "./components/Login"
import Lectures from "./components/lecture/Lectures"
import Shows from "./components/show/Shows"


const WebRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/lectures" element={<Lectures/>} />
      <Route path="/shows" element={<Shows/>} />
      <Route path="/login" element={<Login/>} />


  </Routes>
    </div>
  )
}

export default WebRoutes