import React from 'react'
import './city.css'

const city = () => {
  return (
    <div>
      <div className='container w-75 d-flex justify-content-between align-items-center flex-column' >
        <h1>Popular location in india </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>

      <section>
        <div className='container w-75 container w-75 d-flex justify-content-between align-items-center flex-column'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='citycard'>
                {/* <h3>bhopal</h3> */}
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='citycard'>
                {/* <h3>bhopal</h3> */}
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='citycard'>
                {/* <h3>bhopal</h3> */}
              </div>
            </div> 
          </div>
        </div>
      </section>

      {/* <section>

        <div className='container w-75'>
          <div className='row'><div className='col-lg-4'>
              <div className='citycard'>
                <h3>bhopal</h3>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='citycard'>
                <h3>indore</h3>

              </div>
            </div>
            <div className='container w-75'>
              <div className='col-lg-4'>
                <div className='citycard'>

                  <h3>indore</h3>

                </div>
                <div className='container w-75'>
                  <div className='col-lg-4'>
                    <div className='citycard'>

                      <h3>indore</h3>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section> */}


    </div>
  )
}

export default city
