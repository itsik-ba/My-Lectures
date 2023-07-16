
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
// import BottomPage from './components/bottomPage/BottomPage'
import About from './pages/topBar/top__about/About'



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
