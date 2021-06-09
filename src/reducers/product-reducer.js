const initialState={
    data:[],
    editRow:{},
    isEdit:false
}
const productReducer = (state=initialState,action)=>{
    const newState = {...state}
    switch(action.type){
        case 'ADD_PRODUCT':
            // console.log('adding product',newState)
            newState.data.push(action.payload);
            return newState;
        case 'EDIT_PRODUCT':
            console.log('edit product',newState)
                newState.editRow=newState.data.filter(item=>{return item.created===action.payload.id})
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
            return newState;
    }
}
export default productReducer;