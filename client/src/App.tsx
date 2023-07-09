import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage'
import NavBar from './components/navBar/NavBar'


function App() {
  return (
    
      <div>

        <NavBar/>
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>

      
     </Routes>
    
      </div>
     
  )
}

export default App
