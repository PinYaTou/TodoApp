import React from 'react'
import Item from '../Item'
import './index.css'
export default function listPart(props) {
    const newTodos = props.todos.content.filter((todo)=>{
        return todo.done === false;
   }
   )
  return (
    <div className='listPart'>
        <ul>
        {
            newTodos.map((todo)=> {
                return <Item key = {todo.id} {...todo} updateTodo = {props.updateTodo}   getTodoDetail={props.getTodoDetail}/>
            })
        }
        </ul>
  </div>
  )
}
