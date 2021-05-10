const contactReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
            return state.concat(action.payload)
        case 'DELETE_CONTACT':
            return state.filter(item=>{return item.id===action.payload});
        default:
            return state;
    }
}
export default contactReducer;