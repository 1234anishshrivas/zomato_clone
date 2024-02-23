import React from 'react'
import './card.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
const Card = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-4 my-4'>
          <div className='img-card'>
            <img src='https://b.zmtcdn.com/data/dish_photos/63e/cc616c4a434446861b0e697e587c363e.jpg'></img>
            <h2>Order food</h2>
            <p>Stay Home</p>
          </div>
        </div>
        <div className='col-lg-4 my-4'>
          <div className='img-card'>
            <img src='https://b.zmtcdn.com/data/dish_photos/cdf/70d09c59f315f99037e8c335fa2abcdf.jpg'></img>
            <h2>Order food</h2>
            <p>Stay Home</p>
          </div>
        </div>
        <div className='col-lg-4 my-4'>
          <div className='img-card'>
            <img src='https://b.zmtcdn.com/data/dish_photos/aa1/80096e0e6dd54960075c596da97a0aa1.jpg'></img>
            <h2>Order food</h2>
            <p>Stay Home</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Card
