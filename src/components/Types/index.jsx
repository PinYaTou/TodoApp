import React from 'react'
import CraeteNewList from './components/CraeteNewList'
import DateTypeList from './components/DateTypeList'
import Header from './components/Header'
import TypeList from './components/TypeList'
import './index.css'
export default function Types(props) {
  return (
    <div className='types'>
      <Header getHeaderFlag = {props.getHeaderFlag} />
      <DateTypeList flag = {props.flag}/>
      <TypeList flag = {props.flag}  todos = {props.todos} TYPESDATA = {props.TYPESDATA} changeTypes = {props.changeTypes}/>
      <CraeteNewList flag = {props.flag} />
    </div>
  )
}
