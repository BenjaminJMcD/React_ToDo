import React from 'react'
import ToDoForm from './ToDoForm'

export default function ToDoCreate(props) {
  return (
    <div className="createToDo m-2 text-center">
        <ToDoForm
            getToDoItems={props.getToDoItems}
            setShowToDo={props.setShowToDo} />
    </div>
  )
}
