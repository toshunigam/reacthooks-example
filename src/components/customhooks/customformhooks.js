import { useState } from "react";

const useRegisterForm = (callback) =>{
    const[inputs, setInputs] = useState({});
    
    const handleSubmit=(event)=>{
        console.log(event)
        if(event){
            event.preventDefault();
        }
        callback();
    }
    
    const hanldeInputChange = (event) =>{
        console.log(event.target.value)
        const { target } = event;
        const {name, value} = target;
        event.persist();
        setInputs({...inputs,[name]:value})
    }

    return {
        handleSubmit,
        hanldeInputChange,
        inputs
    }
}

export default useRegisterForm;