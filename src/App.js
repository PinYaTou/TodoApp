import React, {Fragment}from 'react'
import Detail from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
import  {Avatar,TYPESDATA} from './Store'
export default function App() {

  const [todos,setTodo] = React.useState(TYPESDATA[0]);
  console.log(TYPESDATA)
  console.log(todos)
  function addTodo  (todoObj)  {
      const newTodos = [todoObj,...todos.content];
      console.log(newTodos)
      setTodo(todos,todos.content = newTodos);
  }

  function updateTodo (id,done) {
    const newTodos = todos.content.map((todo) => {
      if(todo.id === id){
          todo.done = done;
      }
       return todo;
    })
    setTodo(todos,todos.content = newTodos);
  }

  function deleteTodo (id) {
    const newTodos = todos.content.filter((todo) => {
        return todo.id !== id;
    })
    setTodo(todos,todos.content = newTodos);
  }


  //Details
  const [todoDetail,setTodoDetail] =React.useState([todos.content[0]]) ;
  const getTodoDetail = (id) => {
    const newTodos = todos.content.filter((todo) => {
      return todo.id === id;
    })
    setTodoDetail(newTodos);
  }

  const changeName = (id,name) => {
    console.log(todos.content)
    const newTodos = todos.content.map((todo) => {
      if(todo.id === id){
          todo.name = name;
      }
      return todo;
    })
    console.log(newTodos)
     setTodo(todos,todos.content = newTodos);
  }
 
  const addDetail = (detailObj) => {
    const newtodoDetail = todoDetail;
    newtodoDetail[0].Detail = detailObj;
    setTodoDetail(newtodoDetail);
  }

  const addDate = (date) => {
    const newtodoDetail = todoDetail;
    newtodoDetail[0].date = date;
    setTodoDetail(newtodoDetail);
  }

  //Users
  const [avatar,setAvatar] = React.useState(Avatar);


  const addUser = (userObj) => {
    const newAvatar = [userObj,...avatar]
    setAvatar(newAvatar);
  }

  // types
  const [flag,setFlag] = React.useState(true);

  const getHeaderFlag = (flag) => {
    setFlag(flag);
  }

  const changeTypes = (id) => {
    const newTodo = TYPESDATA.filter((todo) => {
      return todo.id === id;
    })
    setTodo(newTodo[0]);
  }

  return (
    <Fragment>
      <Users avatar = {avatar} addUser = {addUser}/>

      <Types getHeaderFlag = {getHeaderFlag}
                flag = {flag} todos = {todos} 
                TYPESDATA = {TYPESDATA}
                changeTypes = {changeTypes}
      />

      <TodoPart addTodo = {addTodo}  
                todos = {todos} 
                updateTodo = {updateTodo} 
                deleteTodo = {deleteTodo}
                getTodoDetail = {getTodoDetail}
      />

      <Detail   todoDetail = {todoDetail}
                deleteTodo = {deleteTodo} 
                changeName = {changeName}
                addDetail = {addDetail}
                addDate = {addDate}
      />

    </Fragment>
  )
}
