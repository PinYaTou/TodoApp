import React from 'react'
import './index.css'

export default function CraeteNewList(props) {
  return (
    <div className='createNewList' style={{ opacity: props.flag ? 1 : 0 }} >
      <span className="create">Create new list</span>
    </div>
  )
}
