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
        event.persist();
        setInputs(inputs=>({...inputs,[event.target.name]:event.target.value}))
    }

    return {
        handleSubmit,
        hanldeInputChange,
        inputs
    }
}

export default useRegisterForm;