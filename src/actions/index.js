export const userList = () => {
    return {
        type:'USER_LIST'
    }
}

export const action_add_product = (formData)=>{
    return{
        type:'ADD_PRODUCT',
        payload:formData
    }
}

export const action_delete_product = (id)=>{
    return{
        type:'DELETE_PRODUCT',
        payload:id
    }
}

export const action_edit_product = (id)=>{
    console.log(id)
    return{
        type:'EDIT_PRODUCT',
        payload:{id:id,isEdit:true} 
    }
}

export const action_update_product = (formData)=>{
    return{
        type:'UPDATE_PRODUCT',
        payload:formData
    }
}
