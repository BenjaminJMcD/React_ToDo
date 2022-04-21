import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import axios from 'axios'
import SingleCategory from './SingleCategory';
import { useAuth } from '../../contexts/AuthContexts';
import CatCreate from './CatCreate';


export default function Categories() {
    const [categories, setCategories] = useState([]);

    const {currentUser} = useAuth()
    const [showCreate, setShowCreate] = useState(false);

    const getCategories = () => {
        axios.get('http://localhost:56832/api/categories/').then(response => {
            setCategories(response.data)
        })
    }

    useEffect(() => {
        getCategories()
    }, []);

  return (
 <section className="categories">
        <article className="bg-info p-5">
            <h1 className="text-center">Cleaning Locations</h1>
        </article>
        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN &&
            <div className="bg-dark p-2 mb-3 text-center">
                {showCreate ?
                    <>
                        <button onClick={() => setShowCreate(false)} className="btn btn-warning">
                            Cancel
                        </button>
                        <CatCreate
                            setShowCreate={setShowCreate}
                            getCategories={getCategories} />
                    </> :
                        <button onClick={() => setShowCreate(true)} className="btn btn-info">
                            Create New Category
                        </button>
                    }
                </div>}
        <Container>
            <table className="table bg-info table-dark mt-3 mb-3">
                <thead className="table-secondary text-uppercase">
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        {currentUser.email === process.env.REACT_APP_EMAIL_ADMIN && <th>Edit</th>}
                    </tr>
                </thead>
                <tbody>
                    {categories.map(x =>
                            <SingleCategory
                                key={x.CategoryId}
                                category={x}
                                getCategories={getCategories} />
                                
                        )}
                </tbody>
            </table>
        </Container>
    </section>
  )
}
