import React from 'react'
import { useAuth } from '../../contexts/AuthContexts';
import {Container, Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

export default function Login() {

    const {login} = useAuth();
    const navigate = useNavigate();

    async function handleAuth(){
        await login();
        return navigate("/categories")
    }

    return(
        <div className="login">
            <article className="bg-info mb-5 p-5 text-dark">
                <h1 className="text-center">Welcome to Spring Cleaning To-Do List!</h1>
            </article>
            <Container>
                <Card className="m-2 border-dark text-center">
                    <Card.Header className="bg-dark text-white">
                        <h1>Login for full functionality</h1>
                    </Card.Header>
                    <Card.Body>
                        <button onClick={() => handleAuth()} className="btn btn-dark">
                            Login with Github
                        </button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}