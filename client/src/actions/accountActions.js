import  axios  from 'axios';
import tokenConfig from './functions/tokenConfig';

export const getOrder = () => async (dispatch,getState) => {
    try {
        const res = await axios.get('/getCustomerInfo/5332858530',tokenConfig(getState))   
        await dispatch({type:'GET_SUBLIST_SUCCESS',payload:res.data})
    } catch (error) {
        await dispatch({type:'GET_SUBLIST_FAILED'})
    }
}