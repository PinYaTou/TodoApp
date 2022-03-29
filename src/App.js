import React, {Fragment}from 'react'
import Detail from './components/Details'
import TodoPart from './components/TodoPart'
import Types from './components/Types'
import Users from './components/Users'
export default function App() {
  return (
    <Fragment>
      <Users/>
      <Types/>
      <TodoPart/>
      <Detail/>
    </Fragment>
  )
}
