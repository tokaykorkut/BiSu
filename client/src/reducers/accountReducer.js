const initialState={
    sublist:null
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'GET_SUBLIST_SUCCESS':
            return{
                ...state,
                sublist: action.payload.sublist
            }
            
        case 'GET_SUBLIST_FAILED':
            return{
                ...state,
                order:null
            }
        default:
            return state
    }
}