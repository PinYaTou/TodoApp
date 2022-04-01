import React from 'react'
import './index.css'
export default function Completed(props) {
    const newTodos = props.todos.content.filter((todo)=>{
         return todo.done === true;
    }
    )

    const [flag,setFlag] = React.useState(false);

    const mouseEvent = (flag) => {
            setFlag(flag);
    }

    const [titleFlag,setTitleFlag] = React.useState(false);

    const titleMouseEvent = (flag) => {
        setTitleFlag(flag);
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
        <div className='completedTitle' style={{backgroundColor: titleFlag ? '#d3d3d3' : '#f0f0f0'}}
             onMouseEnter={()=>titleMouseEvent(true)}
             onMouseLeave = {()=>titleMouseEvent(false)}
        >
            <span>completed({newTodos.length})</span>
            <div className={ ishide ? 'upArrow' : 'arrow'} onClick={isHide}></div>
        </div>
        <ul>
            {
               newTodos.map((todo) => {
                    return (
                        <li key={todo.id} style={{backgroundColor: flag ? '#d3d3d3' : '#f0f0f0',display: ishide ? 'none' :'block'}  }
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
