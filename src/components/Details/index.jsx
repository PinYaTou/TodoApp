import React from 'react'
import AddDate from './components/AddDate'
import AddDetail from './components/AddDetail'
import Header from './components/Header'
import Introduction from './components/Introduction'
import './index.css'
export default function Detail(props) {
  return (
    <div className='detail'>
      <Header todoDetail = {props.todoDetail}  deleteTodo = {props.deleteTodo}/>
      <Introduction todoDetail = {props.todoDetail}  changeName = {props.changeName}/>
      <AddDate todoDetail = {props.todoDetail} addDate = {props.addDate}/>
      <AddDetail todoDetail = {props.todoDetail} addDetail = {props.addDetail}   />
    </div>
  )
}
