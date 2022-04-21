import React from 'react'
import {Formik, Form, Field} from 'formik'
import catSchema from '../../Utilities/validationSchema'
import axios from 'axios'

export default function CatForm(props) {

    const handleSubmit = (values) => {
        console.log(values)

        if(!props.category){
            //console.log('create mode')

            const catToCreate = {
                Name: values.Name,
                Description: values.Description
            }

            axios.post('http://localhost:56832/api/categories/', catToCreate).then(() => {
                props.setShowCreate(false)
                props.getCategories()
            })
        }
        else{
            const catToEdit ={
                CategoryId: props.category.CategoryId,
                Name: values.Name,
                Description: values.Description
            }

            axios.put('http://localhost:56832/api/categories/', catToEdit).then(() => {
                props.getCategories();
                props.setShowEdit(false);
            })
        }
    }
  return (
    <div className="createCategory m-2 text-white text-center">
        <Formik
            initialValues={{
                Name: props.category ? props.category.Name: '',
                Description: props.category ? props.category.Description: '',
            }}
            validationSchema={catSchema}
            onSubmit={values => handleSubmit(values)}
            >
            {({errors, touched}) => (
                <Form id="catform" className="row text-center m-auto">
                    <div className="form-group m-1 p-1">
                        <Field name="Name" className="form-control" placeholder="Category Name" />
                        {errors.Name && touched.Name ?
                            <div className="text-danger">{errors.Name}</div> :
                            null
                        }
                    </div>
                    <div className="form-group m-1 p-1">
                        <Field name="Description" className="form-control" placeholder="Category Description" />
                        {errors.Description && touched.Description ?
                            <div className="text-danger">{errors.Description}</div> :
                            null
                        }
                    </div>
                    <div className="form-group m-1">
                        <button className="btn btn-success" type="submit">Submit Category to API
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    </div>
  )
}
