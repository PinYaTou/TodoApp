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
    return (
      <div>
         <li className='todo' style={{backgroundColor: flag ? '#ccc' : '#ddd'} } onMouseEnter={()=>mouseEvent(true)} onMouseLeave = {()=>mouseEvent(false)}>
            <input type='radio'   onChange={()=>handleCheck(props.id)}/>
            <span>{props.name}</span>
            <div className={ ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
         </li>
         <ul className='detailUl'>
            {
               props.Detail.map((detail)=> {
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
