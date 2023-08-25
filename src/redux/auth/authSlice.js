import { createSlice } from "@reduxjs/toolkit";
import {register, login, logout, refreshUser} from "./operation";

const initialState = {
    user:{
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
}

const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        extraReducers:{
            //register
            [register.fulfilled](state, action){
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            //logIn
            [login.fulfilled](state, action){
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            //logOut
            [logout.fulfilled](state){
                state.user = {name: null, email: null};
                state.token = null;
                state.isLoggedIn = false;
            },
            //refreshUser
            [refreshUser.pending](state){
                state.isRefreshing = true;
            },
            [refreshUser.fulfilled](state, action){
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            },
            [refreshUser.rejected](state){
                state.isRefreshing = false;
            }
        }
    }
)

export const authReducer = authSlice.reducer;
