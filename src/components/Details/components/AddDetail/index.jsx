import React from 'react'
import './index.css'
import { nanoid } from 'nanoid';
export default function AddDetail(props) {


  function handleKeyUp(event) {
    const {key,target} = event;
    if(key !== 'Enter') return;
    if(target.value.trim() === ''){
        alert('输入不能为空');
        return;
    }
    const detailObj = {id:nanoid(), title: target.value };
    props.addDetail([detailObj,...props.todoDetail[0].Detail]);
    target.value = '';
} 
  return (
  <div className='addDetail'>
    <input className='addSubtasks' type="text"  placeholder='Add subtasks' onKeyUp={handleKeyUp}/>
    <ul >
      {

        props.todoDetail[0].Detail.map((detail)=>{
          return(
            <li key={detail.id}>
              <input className='radio' type="radio" />
              <span className='showSubtasks' type="text">{detail.title}</span>
            </li>
          )
        })
      }

    </ul>
  </div>
  )
}
