const initialState={
    counter:20,
    loading:false
};
const countReduce = (state=initialState,action)=>{
    const newState = {...state}
    switch(action.type){
        case 'ADDUP':
            newState.counter += 1;
            newState.loading = false;
            return newState;
        case 'ADDDOWN':
            newState.counter -= 1;
            return newState;
        case 'LOADING':
            newState.loading = true
        default:
            return newState;

    }
}
export default countReduce;