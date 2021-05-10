import React from "react";
import { Alert, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import ContactForm from "../../forms/ContactForm";
// import { useLocation } from "react-router-dom";

const Contact = () => {
    const contact = useSelector(state=>state.contactReduce);
    // console.log(contact);
    // const { pathname } = useLocation();
    // const userId = pathname.replace("/contact/", "");
    // console.log(userId);
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
                                    {/* <Link to={`/contact/${item.id}`}>
                                        <button>Edit</button>
                                    </Link> */}
                                    <button>Delete</button>
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