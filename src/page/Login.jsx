import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { authenticateAction } from '../redux/actions/authenticateAction';

const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();



    const loginUser = (event) => {
        // preventDefault 를 통해서 refresh를 막아준다
        event.preventDefault();
        dispatch(authenticateAction.login(id, password))
        navigate('/');
    }

    return (
        <Container className="login-input-wrap">
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setId(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container >
    )
}

export default Login