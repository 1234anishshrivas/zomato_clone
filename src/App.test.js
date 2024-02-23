import React from 'react'
import { Routes, Route } from "react-router-dom";

import Login from './Login';
import SignUp from './Signup';                             
const App = () => {
  return (
  <div>
  
   <Routes>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/SignUp' element={<SignUp/>}/>

   </Routes>
    
  </div>
   
  )
   }

export default App