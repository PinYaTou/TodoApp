import React from 'react'
import Item from '../Item'
import './index.css'
export default function listPart(props) {


  return (
    <div className='listPart'>
      <ul>
        {
          props.newUndoneList.map((todo) => {
            return <Item key={todo.id}
              {...todo}
              updateTodo={props.updateTodo}
              selectTodo={props.selectTodo}
            />
          })
        }
      </ul>
    </div>
  )
}
