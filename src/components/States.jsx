import React, {useState} from 'react'

function States() {
  const [x, setx] = useState(0);

  function handleincrease() {
    setX(x + 1)
  }

  function handledecrease() {
    setX(x -1)
  }

  // console.log("now x is", x)

  return (
      <>
          <h1>The value of x is {x}</h1>
          <div className='d-flex'>
            <button className='btn btn-sm btn-warning text-white w-25 m-auto mt-5' onClick={handleincrease}>increment</button>
              <button className='btn btn-sm btn-danger text-white w-25 m-auto mt-5'  onClick={handledecrease}>decrement</button>

              
          </div>
      
      </>
  )
}

export default States