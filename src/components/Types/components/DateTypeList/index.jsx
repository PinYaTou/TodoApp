import React from 'react'
import './index.css'

export default function DateTypeList(props) {
  return (
    <div className='dateTypeList' style={{ opacity: props.flag ? 1 : 0 }}>
      <div className='search'>
        <input type="text" placeholder='Search' />
      </div>
      <ul>
        <li>Today</li>
        <li>Tomorrow</li>
        <li>After tomorrow</li>
        <li>Past</li>
        <li>All</li>
      </ul>
    </div>
  )
}
