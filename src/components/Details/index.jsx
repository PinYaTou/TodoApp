import React from 'react'
import AddDate from './components/AddDate'
import AddDetail from './components/AddDetail'
import Header from './components/Header'
import Introduction from './components/Introduction'
import './index.css'
export default function Detail(props) {

  return (
    <div className='detail'>
      <Header id={props.todo.id} deleteTodo={props.deleteTodo} />
      <Introduction name={props.todo.name} id={props.todo.id} changeName={props.changeName} />
      <AddDate addDate={props.addDate} />
      <AddDetail details={props.todo.Detail}
        addDetail={props.addDetail}
      />
    </div>
  )
}
