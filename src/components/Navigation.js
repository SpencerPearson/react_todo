import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function Navigation() {
    return (
        <Navbar variant="dark" bg="dark" expand="md">
            <Navbar.Brand href="/">To Do</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Nav className="mr-auto">
                        <Nav.Link href="/login">Login</Nav.Link>
                        <Nav.Link href="/todos">View To-Dos</Nav.Link>
                        <Nav.Link href="/categories">Categories</Nav.Link>

                    </Nav>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    )
}
