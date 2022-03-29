import React from 'react'
import  Header  from './componnets/Header'
import  ListPart  from './componnets/List'
import  Completed  from './componnets/Completed'
import './index.css'
export default function TodoPart() {

  const [todos,setTodo] = React.useState([
    {id:'001',name:'吃饭',done:false},
    {id:'002',name:'睡觉',done:false},
    {id:'003',name:'打代码',done:false},
  ])

   function addTodo  (todoObj)  {
      const newTodos = [todoObj,...todos];
      setTodo(newTodos);
  }

  function updateTodo (id,done) {
    const newTodos = todos.map((todo) => {
      if(todo.id === id){
          todo.done = done;
      }
       return todo;
    })
    setTodo(newTodos);
  }
  return (
    <div className='todoPart'>
      <div className='mainPart'>
          <h2 className='title'>To-Do</h2>
          <Header addTodo = {addTodo}/>
          <ListPart todos = {todos} updateTodo = {updateTodo}/>
          <Completed todos = {todos} updateTodo = {updateTodo}/>
      </div>
    </div>
  )
}
