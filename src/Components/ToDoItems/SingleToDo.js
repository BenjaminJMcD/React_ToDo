import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { useAuth } from '../../contexts/AuthContexts'
import axios from 'axios'
import ToDoEdit from './ToDoEdit'
import CheckBoxForm from './CheckBoxForm'

library.add(fas);

export default function SingleToDo(props) {
  const {currentUser} = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteAction = (id) => {
    console.log(id)

    if (window.confirm(`Are you sure you want to delete ${props.toDoItem.Action}?`)) {
      axios.delete(`http://localhost:56832/api/todo/${id}`).then(() => {
        props.getToDoItems()
      })
    }
  }

  return (
    <tr>
      <td>{props.toDoItem.Action}</td>
      <td><CheckBoxForm>{props.toDoItem.Done}</CheckBoxForm></td> 
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
        <td>
          <button className="m-1 rounded" id="editLink" onClick={() => setShowEdit(true)}>
          <FontAwesomeIcon icon={['fas', 'edit']} />
          </button>
          <button className="m-1 rounded" id="deleteLink" onClick={() => deleteAction(props.toDoItem.ToDoId)}>
          <FontAwesomeIcon icon={['fas', 'trash']} />
          </button>
          {showEdit &&
            <ToDoEdit
              toDoItem={props.toDoItem}
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getToDoItems={props.getToDoItems} />  
          }
        </td>
      }
    </tr>
  )
}
