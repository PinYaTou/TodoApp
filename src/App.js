import React, { Fragment, useMemo, useState } from 'react'
import Detail from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
import { Avatar, TYPESDATA } from './Store'
export default function App() {

  const [todoPartTitle, setTodoPartTitle] = useState(TYPESDATA[0].title);

  const [typeList, setTypeList] = useState(() => {
    return TYPESDATA.map((type, index) => ({
      ...type,
      selected: index === 0,
      content: type.content.map(todo => ({
        ...todo,
        selected: false,
      }))
    }))
  });

  const todoList = useMemo(() => {
    const currentType = typeList.find(type => type.selected);
    return currentType.content;
  }, [typeList]);

  const currentTodo = useMemo(
    () => todoList.find(todo => todo.selected),
    [todoList]
  );

  function updateTodoList(todoList) {
    setTypeList(typeList => {
      const currentIndex = typeList.findIndex(type => type.selected);
      const currentType = typeList[currentIndex];
      return [
        ...typeList.slice(0, currentIndex),
        {
          ...currentType,
          content: todoList
        },
        ...typeList.slice(currentIndex + 1)
      ]
    })
  }

  function addTodo(todoObj) {
    const newTodoList = [todoObj, ...todoList];
    updateTodoList(newTodoList)
  }


  function deleteTodo(id) {
    const newTodoList = todoList.filter((todo) => {
      return todo.id !== id;
    })
    updateTodoList(newTodoList)
  }

  function updateTodo(id, updatePart) {
    const newTodos = todoList.map((todo) => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        ...updatePart,
      }
    })

    updateTodoList(newTodos);
  }

  function selectTodo(id) {
    const newTodos  =  todoList.map((todo) => ({
      ...todo,
      selected: id === todo.id
    }));

    updateTodoList(newTodos);
  }

  const changeName = (id, name) => {
    const newTodos = todoList.map((todo) => {
      if (todo.id === id) {
        todo.name = name;
      }
      return todo;
    })
    updateTodoList(newTodos);
  }

  const addDetail = (detailObj) => {
    updateTodo(currentTodo.id, { Detail: detailObj })
  }

  const addDate = (date) => {
    updateTodo(currentTodo.id, { date })
  }

  //Users
  const [avatar, setAvatar] = useState(Avatar);

  const addUser = (userObj) => {
    const newAvatar = [userObj, ...avatar]
    setAvatar(newAvatar);
  }

  // types
  const [flag, setFlag] = useState(true);

  const getHeaderFlag = (flag) => {
    setFlag(flag);
  }

  const changeTypes = (id) => {
    setTypeList(typeList => {
      return typeList.map(type => ({
        ...type,
        selected: type.id === id
      }))
    });

    const currentType = typeList.find(type => type.id === id);
    updateTodoList(currentType.content);
    setTodoPartTitle(currentType.title);
  }

  return (
    <Fragment>
      <Users avatar={avatar} addUser={addUser} />

      <Types getHeaderFlag={getHeaderFlag}
        flag={flag}
        typeList={typeList}
        changeTypes={changeTypes}
      />

      <TodoPart addTodo={addTodo}
        todoPartTitle={todoPartTitle}
        undoneList={todoList}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        selectTodo = {selectTodo}
      />

      {
        currentTodo ? <Detail todo={currentTodo}
          deleteTodo={deleteTodo}
          changeName={changeName}
          addDetail={addDetail}
          addDate={addDate}
        /> : '未选择'
      }

    </Fragment>
  )
}
