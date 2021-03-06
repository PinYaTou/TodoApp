import React from 'react'
import userAvatar from '../../../../Store/avatar/user.jpg'
import './index.css'

export default function Header(props) {

  const [flag, setFlag] = React.useState(true);


  const changeArrow = () => {
    props.getHeaderFlag(flag)
    setFlag(!flag);
  }
  return (
    <div className='header'>
      <img src={userAvatar} alt="" />
      <span>Naochael Jordan</span>
      <div className={flag ? 'arrow' : 'upArrow'} onClick={changeArrow}></div>
    </div>
  )
}
