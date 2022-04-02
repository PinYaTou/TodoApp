import React from 'react'
import './index.css'
export default function Introduction(props) {

  const changeName = (event) => {
    props.changeName(props.todoDetail[0].id,event.target.value);
  }
  return (
      <div className='introduction'>
        <input type="text" name="" id="" value={props.todoDetail[0]&&props.todoDetail[0].name} onChange ={changeName} />
        <textarea  cols="30" rows="10" placeholder='Add introduction'></textarea>
      </div>
  )
}
