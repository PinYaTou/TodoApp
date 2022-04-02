import React from 'react'
import './index.css'
export default function Item(props) {
    
    const [flag,setFlag] = React.useState(false);

    const mouseEvent = (flag) => {
            setFlag(flag);
    }

    const handleCheck = (id) => {
       props.updateTodo(id,true);
    }

    const [ishide,setIShide] = React.useState(true)

    const isHide = () => {
        setIShide(!ishide);
    }
    const changeDetail = () => {
       props.getTodoDetail(props.id);
    }

    return (
      <div className='todoList'>
         <li className='todo' style={{backgroundColor: flag ? '#d3d3d3' : '#f0f0f0'} } 
         onMouseEnter={()=>mouseEvent(true)} onMouseLeave = {()=>mouseEvent(false)}
         onClick = {changeDetail}
         >
            <input type='radio'   onChange={()=>handleCheck(props.id)}/>
            <span>{props.name}</span>
            <div className='date' style={{display: props.date !=='' ? 'block':'none' }}>{props.date}</div>
         </li>
         <div className={ ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
         

         
         <ul className='detailUl'>
            {
               props.Detail&&props.Detail.map((detail)=> {
                  return(
                     <li key={detail.id} style={{display: ishide ? 'none' :'block'}}> 
                        <input type='radio'/>
                        {detail.title}
                     </li>
                  )
               })
            }
         </ul>
      </div>

  )
}
