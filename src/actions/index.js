import { useDispatch } from "react-redux"
import { store } from ".."
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

/* Redux Thunk example goes here */
export const fetch_post = () => {
    return {
      type: "FETCH_USER"
    };
  };
  
  export const receive_post = post => {
    return {
      type: "FETCHED_USER",
      data: post
    };
  };
  
  export const receive_error = () => {
    return {
      type: "RECEIVE_ERROR"
    };
  };
  
export const thunk_action_creator = username => {
      const user = username.replace(/\s/g, "");
      store.dispatch(fetch_post());
      return function(dispatch, getState) {
        return fetch(`https://api.github.com/users/${user}`)
          .then(data => data.json())
          .then(data => {
            if (data.message === "Not Found") {
              throw new Error("No such user found!!");
            } else dispatch(receive_post(data));
          })
          .catch(err => dispatch(receive_error()));
      };
  };