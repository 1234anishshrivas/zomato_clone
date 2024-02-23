import React, { useState } from 'react'
import arr from './viewdata'
const Viewfood = () => {
  const zomatologo = 'https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png'
  const [data, Setdata] = useState('');
  const [search, SetSearch] = useState(arr)

  const fun1 = (e) => {
    Setdata(e.target.value)
    console.log(data)
  }

  const fun2 = (e) => {
    e.preventDefault()
    let newarr = arr.filter((str) => {
      return str.text === data

    })
    SetSearch(newarr)
    console.log()
  }

  return (
    <>

      <div className='container w=75 d-flex justify-content-between align-items-center'>
        <img style={{ width: '8rem' }} src={zomatologo} />
        <nav class='navbar navbar-light bg-light'></nav>
        <nav class="navbar bg-body-tertiary" />
        <div className='container'>
          <form class="d-flex justify-content-between align-items-centre" role="search">
            <input onChange={fun1} name='data' value={data} class="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button onClick={fun2} class="btn btn-outline-success" type="submit">Search</button>
            <p>Search here</p>
          </form>

        </div>
      </div>
      <section className='container w-75'>
        <h2 style={{ fontWeight: 500 }} className='container'>Best Food In Bhopal</h2>
        <div className='row d-flex justify-content-between align-items-center flex-direction-row'>
          {
            search.map((res) => {
              return (<>
                <div class='card mt-4' style={{ width: 300 }}>
                  <img src={res.img} class="card-img-top" alt='.../'></img>
                  <div class="card-body">
                    <p class="card-text">{res.text}</p>
                  </div>
                </div>

              </>)
            })
          }
        </div>
      </section>

    </>
  )
}

export default Viewfood