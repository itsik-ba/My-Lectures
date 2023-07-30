// ********************************
import { Routes, Route } from 'react-router-dom'

// main routes/////////////////
import NavBar from './components/navBar/NavBar'
import { TopNav}  from './components/topNav/TopNav'

// navBar pages routes/////////////////
import HomePage from './pages/mainBar/main__homePage/HomePage'
import Lecture from './pages/mainBar/main__lecture/Lecture'
import Classes from './pages/mainBar/main__classes/Classes'
import Courses from './pages/mainBar/main__courses/Courses'
import BottomPage from './components/bottomPage/BottomPage'
import About from './pages/topBar/top__about/About'
import Login from './pages/topBar/top__login/Login'
import Register from './pages/topBar/top__register/Register'
import ForgetPassword  from './pages/topBar/top__forgotPassword/ForgotPassword'
import Trick from './pages/mainBar/main__homePage/Trick'




function App() {
  return (
    
      <div>
        <TopNav />
        <NavBar/>
        <Routes>
          <Route path="/" element={<Trick />}/>
          <Route path="/lecture" element={<Lecture/>}/>
          <Route path="/courses" element={<Courses/>}/>
          <Route path="/classes" element={<Classes/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/forgotPassword" element={<ForgetPassword/>}/>
         </Routes>
        <BottomPage/>
      </div>  
     
  )
}

export default App
