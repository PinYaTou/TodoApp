import React from 'react'
import './index.css'
export default function Header(props) {
  const deteleTodo = () => {
    if (window.confirm('确定删除吗？')) {
      props.deleteTodo(props.id);
    }
  }
  return (
    <div className='header'>
      <div className='detele' onClick={deteleTodo} ></div>
    </div>
  )
}
