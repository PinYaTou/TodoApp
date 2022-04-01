import React from 'react'
import './index.css'

export default function TypeList(props) {

  const handleChangeTypes = (id) => {
    props.changeTypes(id);
  }
  return (
    <div className='typeList' style={{opacity: props.flag ? 1 : 0 }}>
        <ul>
          {
            props.TYPESDATA.map((typeObj)=>{
              return (
                <li key={typeObj.id} onClick = {() =>handleChangeTypes(typeObj.id)}>
                  {typeObj.title}
                  <span>({typeObj.content.length})</span>
                </li>
              )
            })
          }
        </ul>
    </div>
  )
}
