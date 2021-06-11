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
            let editedrow=newState.data.filter(item=>{return item.created===action.payload.id})
                newState.editRow=editedrow[0]
                newState.isEdit=true
                return newState
            
        case 'UPDATE_PRODUCT':
            console.log('update product',newState)

            let data =  newState.data.filter(item=>{
                return item.created===action.payload.updateKey
            }).map((obj,idx)=>{
                obj.title=action.payload.title
                obj.description=action.payload.description
                return obj;
            });
            newState.isEdit=false;
            newState.editRow={}
            return newState;
        case 'DELETE_PRODUCT':
            return state.filter(item=>{return item.created!==action.payload});
        default:
            return newState;
    }
}
export default productReducer;