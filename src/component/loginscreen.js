
import React from 'react';
import '../App.css';
import Header from './header';
import Footer from './footer';
import { Form, Button } from 'react-bootstrap';


const LoginSccreen = (props) => {
    


    return (
        <div>
            <div style={{ width: '100vw', height: '78vh', display: 'grid', backgroundColor: '#f0e5f6' }}>
                <div style={{ padding: '20px', maxWidth: '430px', maxHeight: '420px', marginLeft: '40%', marginTop: '15vh' }}>
                    <h2>this is the admin page please login:</h2>
                    <br/>
                    <form style={{backgroundColor: '#f0e5f6' }}>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                      </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <button onClick={props.handleShow}  className="ba">submit</button>


                    </form>

                </div>
            </div>
        </div>
    );
}
export default LoginSccreen;