export const userList = () => {
    return {
        type:'USER_LIST'
    }
}

/* product module redux action */
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

/* Contact module redux action */

export const action_add_contact = (formData)=>{
    return{
        type:'ADD_CONTACT',
        payload:formData
    }
}

export const action_delete_contact = (key)=>{
    // console.log(key)
    return{
        type:'DELETE_CONTACT',
        payload:key
    }
}

export const action_edit_contact = (key)=>{
    return{
        type:'EDIT_CONTACT',
        payload:key
    }
}

