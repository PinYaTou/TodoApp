import React, { useState } from 'react'
import './index.css'
import { nanoid } from 'nanoid';
export default function AddDetail(props) {



  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleKeyUp(event) {
    const { key, target } = event;
    if (key !== 'Enter') return;
    if (target.value.trim() === '') {
      alert('输入不能为空');
      return;
    }
    const detailObj = { id: nanoid(), title: target.value };
    props.addDetail([detailObj, ...props.details]);
    setValue('')
  }


  return (
    <div className='addDetail'>
      <input className='addSubtasks' type="text" placeholder='Add subtasks'
        value={value} onChange={handleChange}
        onKeyUp={handleKeyUp} />
      <ul >
        {

          props.details.map((detail) => {
            return (
              <li key={detail.id}>
                <input className='radio' type="radio" />
                <span className='showSubtasks' type="text">{detail.title}</span>
              </li>
            )
          })
        }

      </ul>
    </div>
  )


}
