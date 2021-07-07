import axios from 'axios';
import axiosWithAuth from './customAuth';
export const LOGIN_START = "LOGIN_START";
export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post("http://localhost:5000/api/login", creds)
        .then(res => { console.log(res); localStorage.setItem("token", res.data.payload)});
};

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS_START });
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            if (err.response.status === 403 ) {
                localStorage.removeItem("token");
            }
        })
};