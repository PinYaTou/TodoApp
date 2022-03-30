import React, {Fragment}from 'react'
import Detail from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
import  {Todos} from './Store'
export default function App() {


  const [todos,setTodo] = React.useState(Todos);

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

  function deleteTodo (id) {
    const newTodos = todos.filter((todo) => {
        return todo.id !== id;
    })
    setTodo(newTodos);
  }
  return (
    <Fragment>
      <Users/>
      <Types/>
      <TodoPart addTodo = {addTodo}   todos = {todos} updateTodo = {updateTodo} deleteTodo = {deleteTodo}/>
      <Detail/>
    </Fragment>
  )
}
