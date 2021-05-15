const contactReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_CONTACT':
            return state.concat(action.payload);
        case 'DELETE_CONTACT':
            return state.filter(item=>{return item.id!==action.payload});
        case 'EDIT_CONTACT':
            const array = state.map(item=>{
                return item.id===action.payload?item.editable=true:item.editable=state
            })
            // console.log(array)
            let arr = array.filter(item=>{return typeof item!=='boolean'?item:null});
            console.log(arr)
            return arr[0];
        default:
            return state;
    }
}
export default contactReducer;