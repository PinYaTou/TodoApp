import React from 'react'
import './index.css'
export default function Introduction(props) {

  const changeName = (event) => {
    props.changeName(props.id, event.target.value);
  }
  return (
      <div className='introduction'>
        <input type="text" name="" id="" value={props.name} onChange ={changeName} />
        <textarea  cols="30" rows="10" placeholder='Add introduction'></textarea>
      </div>
  )
}
