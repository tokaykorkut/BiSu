import  axios  from 'axios';
import tokenConfig from './functions/tokenConfig';


export const getSubInfo = () => async (dispatch,getState) => {
   
    const body = {
        phoneNumber: "5332858530"
    }
    try {
        const res = await axios.post('/getSubscriptionOrders',body,tokenConfig(getState))
        await dispatch({type:'ORDER_CHECK_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch({type:'ORDER_CHECK_FAILED'})
    }
}