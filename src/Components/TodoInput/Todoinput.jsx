import React from 'react'
import './todoinput.css'

function Todoinput({onHandleClickAdd,onChangeInput,inputRef}) {
  return (
    <>
    <div className="todoinput_container">
        <input type="text" name="text" className='todoinput' id="" placeholder='Todo' onChange={onChangeInput} ref={inputRef} />
        <button className='add' onClick={onHandleClickAdd}>Add</button>
    </div>
    </>
  )
}

export default Todoinput