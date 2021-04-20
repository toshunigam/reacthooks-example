import React, { useRef } from "react";
import { Button, FormControl, Modal } from "react-bootstrap";
 
const LoginModel = props => {
    const email = useRef()
    const password = useRef()
    function handleInput(event){
        event.preventDefault();
        console.log(email.current.value)
    }
    function submitForm(){
        console.log(email.current.value)
        console.log(password.current.value)
    }
 return (
   <Modal
    {...props}
     size="lg"
     aria-labelledby="contained-modal-title-vcenter"
     centered
   >
    <Modal.Header closeButton>
        <h3>User Login</h3>
    </Modal.Header>
    <Modal.Body>
        <FormControl type="text" placeholder="Email" ref={email} onChange={(event)=>handleInput(event)} className="mr-sm-2 m-1" />
        <FormControl type="password" placeholder="Password" ref={password} onChange={(event)=>handleInput(event)} className="mr-sm-2 m-1" />

    </Modal.Body>

    <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={()=>submitForm()}>Save changes</Button>
    </Modal.Footer>
   </Modal>
 );
};

/* const LoginModel1 = props => {
    return(
        <Modal size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <button variant="secondary">Close</button>
                <button variant="primary">Save changes</button>
            </Modal.Footer>
        </Modal>
    )
} */

export default LoginModel;