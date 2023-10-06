import React from 'react'
import './todoinput.css'

function Todoinput() {
  return (
    <>
    <div className="todoinput_container">
        <input type="text" name="text" className='todoinput' id="" placeholder='Todo' />
        <button className='add'>Add</button>
    </div>
    </>
  )
}

export default Todoinput