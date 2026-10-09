
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import User from './Components/User'
import Admin from './Components/Admin'

function App() {

  return (
    <>
      <NavBar /> 
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/admin' element={<Admin />} />
      </Routes> 
    </>
  )
}

export default App
