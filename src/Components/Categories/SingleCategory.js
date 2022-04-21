import React, {useState} from 'react'
import {useAuth} from "../../contexts/AuthContexts"
import axios from 'axios'
import CatEdit from './CatEdit'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faS } from '@fortawesome/free-solid-svg-icons'


library.add(faS);

export default function SingleCategory(props) {
  const {currentUser} = useAuth()
  const [showEdit, setShowEdit] = useState(false);

  const deleteCategory = (id) => {

    if (window.confirm(`Are you sure you want to delete ${props.category.Name}?`)) {
      axios.delete(`http://localhost:56832/api/categories/${id}`).then(() => {
        props.getCategories()
      })
    }
  }

  return (
    <tr>
        <td>{props.category.Name}</td>
        <td>{props.category.Description}</td>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
        <td>
          <button className="m-1 rounded" id="editLink" onClick={() => setShowEdit(true)}>
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
          </button>
          <button className="m-1 rounded" id="deleteLink" onClick={() => deleteCategory(props.category.CategoryId)}>
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
          </button>
          {showEdit &&
            <CatEdit
              category={props.category}
              setShowEdit={setShowEdit}
              showEdit={showEdit}
              getCategories={props.getCategories} />
            }
          </td>}
    </tr>
  )
}