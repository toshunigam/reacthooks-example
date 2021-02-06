const userReducer = (state=[],action) =>{
    switch(action.type){
        case "USER_LIST":
            return action.pauload;
        default:
            return state;    
    }
}

export default userReducer;