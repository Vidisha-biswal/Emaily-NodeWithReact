/*import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser=() => dispatch=>{
    axios
       .get('/api/current_user')
       .then(res=>dispatch({type:FETCH_USER, payload: res.data}));
};*/

import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    try {
        const res = await axios.get('/api/current_user');
        dispatch({ type: FETCH_USER, payload: res.data });
    } catch (err) {
        console.error('Error fetching current user:', err.message);
        dispatch({ type: FETCH_USER, payload: false });
    }
};

export const handleToken=(token) =>async dispatch=>{
  const res=await axios.post('/api/stripe',token);
  dispatch({type: FETCH_USER, payload: res.data});  
};