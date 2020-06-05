const initialState={
    order:null,
    token:localStorage.getItem('token')
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case 'ORDER_CHECK_SUCCESS':
            return{
                ...state,
                order: action.payload.order
            }

        case 'ORDER_CHECK_FAILED':
            return{
                 ...state,
                 order:null   
            }
    
        default:
            return state
    }
}