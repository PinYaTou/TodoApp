import React from 'react'
import './index.css'
export default function Completed(props) {

    const newTodos = props.todos.filter((todo)=>{
         return todo.done === true;
    }
    )

    const [flag,setFlag] = React.useState(false);

    const mouseEvent = (flag) => {
            setFlag(flag);
    }

    const changeStatus = (id) => {
        props.updateTodo(id,false);
    }

 
    const [ishide,setIShide] = React.useState(false)

    const isHide = () => {
        setIShide(!ishide);
    }

    const deteleCompleted = (id) => {
        if(window.confirm('确定删除吗？')){
            props.deleteTodo(id);   
        }
    }

  return (
    <div className='completed' >
        <div className='completedTitle' >
            <span>completed({newTodos.length})</span>
            <div className={ ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
        </div>
        <ul>
            {
               newTodos.map((todo) => {
                    return (
                        <li key={todo.id} style={{backgroundColor: flag ? '#ccc' : '#ddd',display: ishide ? 'none' :'block'}  }
                          onMouseEnter={()=>mouseEvent(true)}
                          onMouseLeave = {()=>mouseEvent(false)}
                        >
                            {todo.name}
                            <button className='detele' style={{display:flag ? 'block' : 'none'}}  onClick={()=>changeStatus(todo.id)}>未完成</button>
                            <button  style={{display:flag ? 'block' : 'none'}}  onClick={()=>deteleCompleted(todo.id)}>删除</button>
                        </li>
                    )
                  
                })
            }
        </ul>
  </div>
  )
}
