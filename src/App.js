import React, {Fragment,useState}from 'react'
import Detail from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
import  {Avatar,TYPESDATA} from './Store'
export default function App() {

  const [todoPartTitle,setTodoPartTitle] = useState(TYPESDATA[0].title);

  const [undoneList,setUndoneList] = useState(TYPESDATA[0].content);


  function addTodo  (todoObj)  {
      setUndoneList([todoObj,...undoneList]);
      
  }

  function updateTodo (id,done) {
    const newTodos = undoneList.map((todo) => {
      if(todo.id === id){
          todo.done = done;
      }
       return todo;
    })

    setUndoneList(newTodos);

  }

  function deleteTodo (id) {
    const newTodos = undoneList.filter((todo) => {
        return todo.id !== id;
    })
    setUndoneList(newTodos);
  }


  //Details
  let [todoDetail,setTodoDetail] = useState([]) ;


  const getTodoDetail = (id) => {
    const newTodos = undoneList.filter((todo) => {
      return todo.id === id;
    })
    setTodoDetail(newTodos);
  }

  const changeName = (id,name) => {
    const newTodos = undoneList.map((todo) => {
      if(todo.id === id){
          todo.name = name;
      }
      return todo;
    })
    setUndoneList(newTodos);
  }
 
  const addDetail = (detailObj) => {

     todoDetail[0].Detail = detailObj;

    setTodoDetail(todoDetail);

  }

  const addDate = (date) => {
    
    todoDetail[0].date = date;

    setTodoDetail(todoDetail);
  }

  //Users
  const [avatar,setAvatar] = useState(Avatar);


  const addUser = (userObj) => {
    const newAvatar = [userObj,...avatar]
    setAvatar(newAvatar);
  }

  // types
  const [flag,setFlag] = useState(true);

  const getHeaderFlag = (flag) => {
    setFlag(flag);
  }

  const changeTypes = (id) => {
    const newTodo = TYPESDATA.filter((todo) => {
      return todo.id === id;
    })
    setUndoneList(newTodo[0].content);
    
    setTodoPartTitle(newTodo[0].title);
  }

  return (
    <Fragment>
      <Users avatar = {avatar} addUser = {addUser}/>

      <Types  getHeaderFlag = {getHeaderFlag}
                flag = {flag}  
                TYPESDATA = {TYPESDATA}
                changeTypes = {changeTypes}
      />

      <TodoPart addTodo = {addTodo}  
                todoPartTitle = {todoPartTitle}
                undoneList = {undoneList} 
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
