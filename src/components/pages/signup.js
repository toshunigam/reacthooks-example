import React from "react";
import { Form, Button } from "react-bootstrap";

import useCustomForm from "../customhooks/formhook";

const initialValues = {
    fullname: "",
    email: "",
    phone: 0,
    password:""
};

const SignUp = () => {
    const {
    values,
    handleChange,
    handleSubmit
    } = useCustomForm({ initialValues, onSubmitForm: values => console.log(values.values) });
    
    return (
        <div style={{ width: "50%", margin: "0 auto" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name="fullname" onChange={handleChange} value={values.fullname} />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" onChange={handleChange} value={values.email} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" name="phone" onChange={handleChange} value={values.phone} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleChange} value={values.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default SignUp;