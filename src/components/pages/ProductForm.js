import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { action_add_product } from "../../actions";

function ProductForm(){
    const title = useRef();
    const description = useRef();
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        let d = new Date();
        let formData = {
            title:title.current.value,
            description:description.current.value,
            created:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'-'+d.getUTCMilliseconds()
        }
            console.log('adding')
            dispatch(action_add_product(formData));
    }
    return(<>
        <form onSubmit={handleSubmit}>
            Title :<input type="text" ref={title} placeholder="Product title" /><br />
            description:<input type="text" ref={description} placeholder="Product desc" /><br />
            <input type="submit" value="Save" />
        </form>
    </>)
}
export default ProductForm;