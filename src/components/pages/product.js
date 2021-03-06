import React from "react";
import { Alert, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { action_delete_product, action_edit_product } from "../../actions";
import ProductForm from "./ProductForm";
const Product = () => {
    const dispatch = useDispatch();

    const product = useSelector(state => state.productReduce);
    console.log("LIST", product)
    return (
        <Row>
            <div style={{ width: "97%", margin: "0 auto" }}>
                <Alert variant="success">
                    Product Page CRUD Example using redux
                </Alert>
                    
                <div style={{ width: "50%", margin: "0 auto" }}>
                    <ProductForm statusProp={product} />
                </div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SN</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.data.length > 0 ? product.data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.created}</td>
                                <td><button onClick={()=>dispatch(action_edit_product(item.created))}>Edit</button><button onClick={() => dispatch(action_delete_product(item.created))}>Delete</button></td>
                            </tr>
                        )
                    }) : <tr><td colSpan="5">No records</td></tr>}
                </tbody>
            </Table>
        </Row>
    )
};

export default Product;