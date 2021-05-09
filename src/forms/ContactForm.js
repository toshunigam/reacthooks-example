import { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

function ContactForm() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [policy, setPolicy] = useState('')

    const handleFullname = (e) =>setFullname(e.target.value)
    const handleEmail = (e) =>setEmail(e.target.value)
    const handlePhone = (e) =>setPhone(e.target.value)
    const handleAddress = (e) =>setAddress(e.target.value)
    const handlePolicy = (e) =>setPolicy(e.target.value)

    const handleSubmit = ()=>{
        if(fullname && email && phone && address){
            let formData = {
                fullname:fullname,
                email:email,
                phone:phone,
                address:address
            }
            console.log(formData)
        }
    }
    return (<>
        <Form>
            <Form.Group controlId="formGridFullname">
                <Form.Label>Fullname</Form.Label>
                <Form.Control placeholder="Fullname" onChange={handleFullname} value={fullname} />
            </Form.Group>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} value={email} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" placeholder="Phone" onChange={handlePhone} value={phone} />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" onChange={handleAddress} value={address} />
            </Form.Group>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="term and policy" onChange={handlePolicy} value={policy} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    </>)
}
export default ContactForm;