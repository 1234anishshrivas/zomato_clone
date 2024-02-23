import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login1'
import Signup from './Signup1'
import Card from './Card'
import Viewfood from './viewfood'
import Addrestro from './Addrestro'
// import Footer from './Footer'

const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Card'element={<Card/>}/>
        <Route path='/Viewfood' element={<Viewfood/>}/>
        <Route path='/Addrestro' element={<Addrestro/>}/>
        
      </Routes>

    </div>
  )
}

export default App
