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
