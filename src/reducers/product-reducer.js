const initialState={
    data:[],
    editRow:{},
    isEdit:false
}
const productReducer = (state=initialState,action)=>{
    const newState = {...state}
    switch(action.type){
        case 'ADD_PRODUCT':
            return newState.data.concat(action.payload);
        case 'EDIT_PRODUCT':
                newState.data=state
                newState.editRow=state.filter(item=>{return item.created===action.payload.id})
                newState.isEdit=true
                return newState
            
        case 'UPDATE_PRODUCT':
            return state.map((item=>{
                if(item.created===action.payload.updateKey){
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