import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { action_add_product, action_update_product } from "../../actions";

function ProductForm(){
    const title = useRef();
    const description = useRef();
    const dispatch = useDispatch();

    const [updateKey,setUpdateKey] = useState('');

    const editProduct = useSelector(state=>state.productReduce);

    useEffect(()=>{
        console.log(editProduct);
        if(editProduct[0]!==undefined){
            setUpdateKey(editProduct[0].updateKey)
        }
    },[editProduct])

    console.log(editProduct[0])
    console.log(updateKey)

    const handleSubmit = (e)=>{
        e.preventDefault();
        let d = new Date();
        let formData = {
            title:title.current.value,
            description:description.current.value,
            created:d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'-'+d.getUTCMilliseconds()
        }
        // console.log(formData)
        if(updateKey==='' || updateKey===undefined){
            console.log('adding')
            dispatch(action_add_product(formData));
        }else{
            console.log('updating')
            formData.updateKey=updateKey;
            dispatch(action_update_product(formData));
        }
    }
    return(<>
        <form onSubmit={handleSubmit}>
            Title :<input type="text" ref={title} placeholder="Product title"  /><br />
            description:<input type="text" ref={description} placeholder="Product desc"  /><br />
            <input type="submit" value="Save" />
        </form>
    </>)
}
export default ProductForm;