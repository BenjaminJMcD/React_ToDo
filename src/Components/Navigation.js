import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="dark" expand="md" className="p-3">
            <Navbar.Brand href="/">Log In</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="mr-auto">
                    <Link to="/Todos" className="nav-link">To Do</Link>
                    <Link to="Categories" className="nav-link">Categories</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}