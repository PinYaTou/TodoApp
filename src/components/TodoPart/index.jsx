import React from 'react'
import  Header  from './componnets/Header'
import  ListPart  from './componnets/List'
import  Completed  from './componnets/Completed'

import './index.css'
export default function TodoPart(props) {

  return (
    <div className='todoPart'>
      <div className='mainPart'>
          <h2 className='title'>{props.todos.title}</h2>
          <Header addTodo = {props.addTodo}/>
          <ListPart todos = {props.todos} updateTodo = {props.updateTodo}  getTodoDetail={props.getTodoDetail}/>
          <Completed todos = {props.todos} updateTodo = {props.updateTodo} deleteTodo = {props.deleteTodo}/>
      </div>
    </div>
  )
}
