import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios';
import SingleToDo from './SingleToDo';
import './ToDo.css'
import { useAuth } from '../../contexts/AuthContexts';
import ToDoCreate from './ToDoCreate';


export default function ToDoItems() {
    const [toDoItems, setToDoItems] = useState([]);

    const {currentUser} = useAuth()
    const [showCreate, setShowCreate] = useState(false);

    const getToDoItems = () => {
        axios.get('http://localhost:56832/api/todo/').then(response => {
          setToDoItems(response.data)
        })
    }

    useEffect(() => {
      getToDoItems()
    }, []);

  return (
    <section className="toDoItems">
      <article className="bg-info p-5">
        <h1 className="text-center">To Do Items</h1>
      </article>
      {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
          <div className="bg-dark p-2 mb-3 text-center">
            {showCreate ?
              <>
                  <button onClick={() =>
                  setShowCreate(false)} className="btn btn-warning">
                    Cancel
                  </button>
                  <ToDoCreate 
                    setShowCreate={setShowCreate}
                    getToDoItems={getToDoItems}
                    />
              </> :
              <button onClick={() => setShowCreate(true)} className="btn btn-info">
                Create To-Do Item
              </button>
            }
          </div>
        }
      <Container>
        <table className="table bg-info table-dark mt-3 mb-3">
          <thead className="table-secondary text-uppercase">
            <tr>
                <th>Action</th>
                <th>Done</th>
                {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
                    <th>Actions</th>
                }
            </tr>
          </thead>
          <tbody>
            {toDoItems.map((x) =>
              <SingleToDo
                key={x.ToDoId}
                toDoItem={x}/>
            )}

          </tbody>
        </table>
      </Container>
    </section>
  )
}
