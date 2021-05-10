import React from "react";
import { Alert, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { action_delete_contact, action_edit_contact } from "../../actions";
import ContactForm from "../../forms/ContactForm";

const Contact = () => {
    const contact = useSelector(state=>state.contactReduce);
    const dispatch = useDispatch()
    return(
        <Row>
            <div style={{ width: "97%", margin: "0 auto" }}>
                <Alert variant="success">
                    Contact Page CRUD Example using redux
                </Alert>
                    
                <div style={{ width: "50%", margin: "0 auto" }}>
                    <ContactForm />
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.length > 0 ? contact.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button onClick={()=>dispatch(action_edit_contact(item.id))}>Edit</button>
                                    <button onClick={()=>dispatch(action_delete_contact(item.id))}>Delete</button>
                                </td>
                            </tr>
                        )
                    }) : <tr><td colSpan="6">No records</td></tr>}
                </tbody>
            </Table>
        </Row>
    )
};

export default Contact;