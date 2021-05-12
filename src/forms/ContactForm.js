import { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { action_add_contact } from "../actions";

function ContactForm() {
    const [fullname, setFullname]       = useState('');
    const [email, setEmail]             = useState('');
    const [phone, setPhone]             = useState('');
    const [address, setAddress]         = useState('');
    const [policy, setPolicy]           = useState('')

    const handleFullname                = (e) => setFullname(e.target.value)
    const handleEmail                   = (e) => setEmail(e.target.value)
    const handlePhone                   = (e) => setPhone(e.target.value)
    const handleAddress                 = (e) => setAddress(e.target.value)
    const handlePolicy                  = (e) => setPolicy(e.target.value)

    const contact                       = useSelector(state=>state.contactReduce);
    const dispatch                      = useDispatch();

    console.log(contact)

    useEffect(()=>{
        if(contact.length>0){
            let {_id, _fullname, _email, _phone, _address, _editable} = contact.filter(item=>{ return item.editable?item:null})
            console.log(_editable)
            if(_editable && _id){
                setFullname(_fullname);
                setEmail(_email)
                setPhone(_phone)
                setAddress(_address)
            }
        }
    },[contact])

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(fullname && email && phone && address){
            let formData = {
                id:contact.length+1,
                fullname:fullname,
                email:email,
                phone:phone,
                address:address
            }
            console.log(formData)
            dispatch(action_add_contact(formData));
            setFullname('');
            setEmail('')
            setPhone('')
            setAddress('')
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