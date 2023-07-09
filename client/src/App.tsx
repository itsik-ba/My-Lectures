
// ********************************
import { Routes, Route } from 'react-router-dom'


// main routes/////////////////
import NavBar from './components/navBar/NavBar'
import { TopNav}  from './components/topNav/TopNav'

// pages routes/////////////////
import HomePage from './pages/mainBar/homePage/HomePage'
import Lecture from './pages/mainBar/lecture/Lecture'
import Classes from './pages/mainBar/classes/Classes'
import Courses from './pages/mainBar/courses/Courses'



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
    </Routes>
    
      </div>
     
  )
}

export default App
