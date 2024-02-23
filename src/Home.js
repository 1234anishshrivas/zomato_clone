import React from 'react';
import './App.css'
import Card from './Card';
import City from './City1';
import { NavLink } from 'react-router-dom';
import { FaUserAlt }  from 'react-icons/fa';
import { BiLogInCircle} from 'react-icons/bi';
import Logo from './images/Zomato-Logo.png';
import Background from'./images/BackGround.png';
import Footer1 from './Footer1';

 
const Home = () => {
  return (
      <div className='parent'>

          <img className='img' src={Background} alt="logo" />   background image

          <div className='icons-bg'>
              <div className='div1'>
                  <span className='floar-right1'> <NavLink to='/Viewfood' className='color-b'>View Food</NavLink> </span>
                  <span className='floar-right2'> <NavLink to='/Addrestro' className='color-b'>Add Restaurant</NavLink> </span>
              </div>
              <div className='div2'>
                  
        <span className='floar-right1'> <FaUserAlt /> <NavLink to='/signup' className='color-b'>Sign-up</NavLink> </span>
                  <span className='floar-right2'> <NavLink to='/login' className='color-b'>Login</NavLink> <BiLogInCircle /> </span>  
                       </div>
          </div>
          <div className='heading-zomato'>
              <img src={Logo} alt="logo" />
          </div>
          <div className='input-search'>
              <h3>Find the best restaurants, cafe`s and bars in India</h3>
              <div className="input">
                  <select name="" id="">
                  <option value="Salichauka Road">Salichauka Road</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Kolkata">Kolkata</option>
                      <option selected value="Bhopal">Bhopal</option>
                      <option value="Itarsi">Itarsi</option>
                      <option value="Nagpur">Nagpur</option>
                      <option value="Maharastra">Maharastra</option>
                  </select>
                  |
                  <input type="text" placeholder="Search for restaurant or a dish" />
              </div>

          </div>
          <Card/> 

          <section>
            <City/>
          </section>


          <footer>
            <Footer1/>
          </footer>
          
      </div>
  )
}

export default Home
