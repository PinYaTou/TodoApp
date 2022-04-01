import React from 'react'
import { nanoid } from 'nanoid';
import './index.css'
export default function header(props) {

   function handleKeyUp(event) {
        const {key,target} = event;
        if(key !== 'Enter') return;
        if(target.value.trim() === ''){
            alert('输入不能为空');
            return;
        }
        const todoObj = {id:nanoid(), name: target.value , done: false,date:'',Detail:[]};
        props.addTodo(todoObj);
        target.value = '';
   }
  return (
    <div className='header'>
        <input onKeyUp = {handleKeyUp} type="text" placeholder='New task'/>
     </div>
  )
}
