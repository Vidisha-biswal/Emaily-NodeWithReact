// import axios from 'axios';
// import { FETCH_USER } from './types';
// import { FETCH_SURVEYS } from './types';

// export const fetchUser = () => async dispatch => {
//     try {
//         const res = await axios.get(`${process.env.development.REACT_APP_API_URL}/api/current_user`);
//         dispatch({ type: FETCH_USER, payload: res.data });
//     } catch (err) {
//         console.error('Error fetching current user:', err.message);
//         dispatch({ type: FETCH_USER, payload: false });
//     }
// };

// export const handleToken=(token) =>async dispatch=>{
//   const res=await axios.post(`${process.env.development.REACT_APP_API_URL}/api/stripe`,token);
//   dispatch({type: FETCH_USER, payload: res.data});  
// };

// export const submitSurvey= (values, history) =>async dispatch=>{    
//     const res=await axios.post(`${process.env.development.REACT_APP_API_URL}/api/surveys`, values);
//     dispatch({type:FETCH_USER, payload: res.data});
//     history.push('/surveys');
// };

// export const fetchSurveys = () => async dispatch => {
//     const res= await axios.get(`${process.env.development.REACT_APP_API_URL}/api/surveys`);
//     dispatch({ type: FETCH_SURVEYS, payload: res.data });
// };
import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

const API_URL = process.env.REACT_APP_API_URL;

export const fetchUser = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/api/current_user`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
  } catch (err) {
    console.error(
      "Error fetching current user:",
      err.message
    );

    dispatch({
      type: FETCH_USER,
      payload: false,
    });
  }
};

export const handleToken = (token) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_URL}/api/stripe`,
      token,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
  } catch (err) {
    console.error(
      "Error processing payment:",
      err.message
    );
  }
};

export const submitSurvey = (values, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${API_URL}/api/surveys`,
      values,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });

    history.push("/surveys");
  } catch (err) {
    console.error(
      "Error submitting survey:",
      err.message
    );
  }
};

export const fetchSurveys = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${API_URL}/api/surveys`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: FETCH_SURVEYS,
      payload: res.data,
    });
  } catch (err) {
    console.error(
      "Error fetching surveys:",
      err.message
    );
  }
};