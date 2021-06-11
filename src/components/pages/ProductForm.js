import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { action_add_product, action_update_product } from "../../actions";

function ProductForm({statusProp}) {
    const title = useRef();
    const description = useRef();
    const [updateKey, setUpdateKey] = useState('-1')
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log(statusProp.isEdit)
        if(statusProp.isEdit){
            title.current.value=statusProp.editRow.title
            description.current.value=statusProp.editRow.description
            setUpdateKey(statusProp.editRow.created)
        }
    },[statusProp])
    const handleSubmit = (e) => {
        e.preventDefault();
        if(updateKey==='-1'){
            let d = new Date();
            let formData = {
                title: title.current.value,
                description: description.current.value,
                created: d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getUTCMilliseconds()
            }
            console.log('adding')
                dispatch(action_add_product(formData));
        }else{
            let formData = {
                title: title.current.value,
                description: description.current.value,
                updateKey:updateKey
            }
            console.log('updating')
            dispatch(action_update_product(formData));
        }
        title.current.value=''
        description.current.value=''
    }
    return (<>
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                    Title
                </Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Title" ref={title} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                    Description
                </Form.Label>
                <Col sm={10}>
                    <Form.Control as="textarea" rows={3} ref={description} />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col sm={{ span: 10, offset: 2 }}>
                    <Button type="submit">Add Product</Button>
                </Col>
            </Form.Group>
        </Form>
    </>)
}
export default ProductForm;