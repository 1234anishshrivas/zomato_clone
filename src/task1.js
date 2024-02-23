import React, { useState } from 'react'
const App = () => {


  const [data, SetData] = useState()
  const [input, SetInput] = useState([])


  const fun1 = (e) => {
    SetData(e.target.value)
    console.log(e.target.value, "nbjhvj")
  }
  const fun2 = () => {
    SetInput([...input, data])

    SetData('')

  }
  const fun3=(index)=>{


    let newaRR= input.filter((ele,id)=>{
      return id!==index
    })

    SetInput(newaRR)

  }


  return (
    <div>

      <input name='data' value={data} onChange={fun1} placeholder='enter your item' />

      <button onClick={fun2}>add</button>

      {
        input.map((ele,index) => {
          console.log(index,"jjfd")
          return (<div>
            <li>
              {ele}
            </li>
            <button onClick={()=>{fun3(index)}}>delete</button>
          </div>)
        })
      }
    </div>
  )
}

export default App