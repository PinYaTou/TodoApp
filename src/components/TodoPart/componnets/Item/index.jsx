import React from 'react'
import './index.css'
export default function Item(props) {

   const [flag, setFlag] = React.useState(false);

   const mouseEvent = (flag) => {
      setFlag(flag);
   }

   const handleCheck = () => {
      props.updateTodo(props.id, { done: true });
   }

   const [ishide, setIShide] = React.useState(true)

   const isHide = () => {
      setIShide(!ishide);
   }
   const handleClick = () => {
      props.selectTodo(props.id);
   }

   return (
      <div className='todoList'>
         <li className='todo' style={{ backgroundColor: flag ? '#d3d3d3' : '#f0f0f0' }}
            onMouseEnter={() => mouseEvent(true)} onMouseLeave={() => mouseEvent(false)}
            onClick={handleClick}
         >
            <input type='radio' onChange={handleCheck} />
            <span>{props.name}</span>
            <div className='date' style={{ display: props.date !== '' ? 'block' : 'none' }}>{props.date}</div>
         </li>
         <div className={ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>



         <ul className='detailUl'>
            {
               props.Detail && props.Detail.map((detail) => {
                  return (
                     <li key={detail.id} style={{ display: ishide ? 'none' : 'block' }}>
                        <input type='radio' />
                        {detail.title}
                     </li>
                  )
               })
            }
         </ul>
      </div>

   )
}
