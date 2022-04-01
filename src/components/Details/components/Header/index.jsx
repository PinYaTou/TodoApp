import React from 'react'
import './index.css'
export default function Header(props) {
  const deteleTodo =(id)=> {
    if(window.confirm('确定删除吗？')){
      props.deleteTodo(id);   
  }
  }
  return (
    <div className='header'>
        <div className='detele' onClick={()=>deteleTodo(props.todoDetail[0].id)} ></div>
    </div>
  )
}
