import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {IP4} from "./pref";



export const loadUser = () => async (dispatch) => {
    // try {
    //     const requestOptions = {
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': Bearer ${localStorage.getItem('accessToken')},
    //     },
    // };
    //     const response = await axios.get(${IP4}products, requestOptions);
    //     dispatch(setProducts(response.data)); 
    // } catch (error) {
    // }

    const response = await axios.get(`${IP4}`);
    // console.log(response.data);
    dispatch(setUser(response.data));
}

export const delUser = (id) => async (dispatch) => {
    // try {
    //     const requestOptions = {
    //     headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': Bearer ${localStorage.getItem('accessToken')},
    //     },
    // };
        const response = await axios.delete(`${IP4}/${id}`);
        dispatch(setUser(response.data.data)); 
    // } catch (error) {
    // }
}



export const UserSlice = createSlice({
    name: "UserSlice",
    initialState : {
        User: [],
    },

    reducers: {
        clearUser: (state, action) => {
            state.User = [];
        },
        setUser: (state, action) => {
            state.User = action.payload;
        }
    }
});

export const {
    clearUser,
    setUser
} = UserSlice.actions;

export default UserSlice.reducer;