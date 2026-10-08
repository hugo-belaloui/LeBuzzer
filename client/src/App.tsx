
import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './Components/Home'

function App() {

  return (
    <>
      <NavBar /> 
      <Routes>
          <Route path='/' element={ <Home />} />
      </Routes> 
    </>
  )
}

export default App
