import React from 'react'
import {Formik, Form, Field} from 'formik'
import {todoSchema} from '../../Utilities/validationSchema'
import axios from 'axios'

export default function ToDoForm(props) {

    const handleSubmit = (values) => {
        console.log(values)

        if(!props.toDoItem){
            const todoToCreate = {
                CategoryId: props.toDoItem.CategoryId,
                Action: values.Action,
                Done: values.Done
            }

            axios.post('http://localhost:56832/api/todo/', todoToCreate).then(() => {
                props.setShowCreate(false)
                props.getToDoItems()
            })
        }
        else{
            const todoToEdit ={
                CategoryId: props.toDoItem.CategoryId,
                ToDoId: props.toDoItem.ToDoId,
                Action: values.Action,
                Done: values.Done
            }

            axios.put('http://localhost:56832/api/todo/', todoToEdit).then(() => {
                props.getToDoItems();
                props.setShowEdit(false);
            })
        }
    }


  return (
    <div className="createToDoItem m-2 text-white text-center">
        <Formik
            initialValues={{
                CategoryId: props.toDoItem ? props.toDoItem.CategoryId : '',
                Action: props.toDoItem ? props.toDoItem.Action : '',
                Done: props.toDoItem ? props.toDoItem.Done : ''
            }}
            validationSchema={todoSchema}
            onSubmit={values => handleSubmit(values)}
            >
                {({errors, touched}) => (
                    <Form id="todoForm" className="row text-center m-auto">
                        <div className="form-group m-1 p-1">
                            <Field name="Action" className="form-control" placeholder="To Do..."
                            />
                            {errors.Action && touched.Action ?
                                <div className="text-danger">{errors.Action}</div> : null 
                            }
                        </div>
                        <div className="form-group m-1 p-1">
                            <Field name="Done" className="form-control" placeholder="Done? True or False" />
                            {errors.Done && touched.Done ?
                                <div className="text-danger">{errors.Done}</div> : null
                            }
                        </div>
                        <div className="form-group m-1">
                             <button className="btn btn-success" type="submit">Submit To-Do Item to API</button>
                    
                        </div>
                    </Form>
                )}
            </Formik>
    </div>
    
  )
}
