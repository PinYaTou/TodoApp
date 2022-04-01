import React from 'react'
import { nanoid } from 'nanoid'
import AddUser from './img/add.png'
import userAvatar from '../../Store/avatar/user.jpg'
import './index.css'
export default function Users(props) {

  const addUser = () => {
    const userObj = {id:nanoid(),avatar:userAvatar};
    props.addUser(userObj);
  }

  return (
    <div className='users'>
      <ul className='user'>
        {
          props.avatar.map((userObj) => {
            return(
              <li key={userObj.id}>
                <img src={userObj.avatar} alt="" />
              </li>
            )
          })
        }
      </ul>
        <img className='addUser' src={AddUser} alt=""  onClick={addUser}/>
    </div>
  )
}
