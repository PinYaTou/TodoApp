import React from 'react'
import './index.css'
export default function AddDate(props) {
  const [flag,setFlag] = React.useState(true); 
  const changeFlag = (flag) => {
    setFlag(!flag);
  }
  function handleKeyUp(event) {
    const {key,target} = event;
    if(key !== 'Enter') return;
    if(target.value.trim() === ''){
        alert('输入不能为空');
        return;
    }
    const date = target.value;
    props.addDate(date);
    target.value = '';
}
  return (
  <div className='addDate' onMouseEnter={()=>changeFlag(true)} onMouseLeave={()=>changeFlag(false)}>
    <span style={{display: flag ? 'block' :'none'}}>Add date</span>
    <input type="text"  style={{display: flag ? 'none' :'block'}} onKeyUp = {handleKeyUp}/>
  </div>
  )
}
