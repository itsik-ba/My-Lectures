
// ********************************
import { Routes, Route } from 'react-router-dom'


// main routes/////////////////
import NavBar from './components/navBar/NavBar'
import { TopNav}  from './components/topNav/TopNav'

// navBar pages routes/////////////////
<<<<<<< HEAD
import HomePage from './pages/mainBar/main__homePage/HomePage'
import Lecture from './pages/mainBar/main__lecture/Lecture'
import Classes from './pages/mainBar/main__classes/Classes'
import Courses from './pages/mainBar/main__courses/Courses'
// import BottomPage from './components/bottomPage/BottomPage'
import About from './pages/topBar/top__about/About'
=======
import HomePage from './pages/mainBar/homePage/HomePage'
import Lecture from './pages/mainBar/lecture/Lecture'
import Classes from './pages/mainBar/classes/Classes'
import Courses from './pages/mainBar/courses/Courses'
import BottomPage from './components/bottomPage/BottomPage'
import About from './pages/about/About'
>>>>>>> 8a1586d90e8958d8caad5731fc4ee91d9f23309d



function App() {
  return (
    
      <div>
        <TopNav />
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>

          <Route path="/lecture" element={<Lecture/>}/>

          <Route path="/courses" element={<Courses/>}/>

          <Route path="/classes" element={<Classes/>}/>

          <Route path="/about" element={<About/>}/>
        </Routes>
        {/* <BottomPage/> */}
      </div>  
     
  )
}

export default App
