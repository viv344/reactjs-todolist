import React from 'react'
import ToDoCard from './ToDoCard'

export default function ToDoList(props) {
    const{todos}=props
  
    return (
    <ul className='main'>
        {todos.map((todo,TodoIndex)=>{
            return(
                <ToDoCard {...props} key={TodoIndex} index={TodoIndex}>
                    <p>{todo}</p>
                </ToDoCard>
            )
        }  )}
    </ul>
  )
}
