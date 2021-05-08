const productReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_PRODUCT':
            return state.concat(action.payload);
        case 'EDIT_PRODUCT':
            return state.filter(item=>{return item.created===action.payload});
        case 'UPDATE_PRODUCT':
            return state.map((item=>{
                if(item.created===action.payload.created){
                    return {
                        ...state,
                        title:action.payload.title,
                        description:action.payload.description
                    }
                }else{
                    return state;
                }
            }));
        case 'DELETE_PRODUCT':
            return state.filter(item=>{return item.created!==action.payload});
        default:
            return state;
    }
}
export default productReducer;