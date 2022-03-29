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

    const [ishide,setIShide] = React.useState(false)

    const isHide = () => {
        setIShide(!ishide);
    }

    return (
         <li style={{backgroundColor: flag ? '#ccc' : '#ddd'} } onMouseEnter={()=>mouseEvent(true)} onMouseLeave = {()=>mouseEvent(false)}>
            <input type='radio'   onChange={()=>handleCheck(props.id)}/>
            <span>{props.name}</span>
            <div className={ ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
         </li>
  )
}
