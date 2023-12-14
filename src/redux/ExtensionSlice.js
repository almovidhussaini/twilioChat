import { createSlice, createAsyncThunk, } from '@reduxjs/toolkit'
// import {Axios} from 'axios'
import customFetch from '../utils/Axios';

import { getDefaultMiddleware } from '@reduxjs/toolkit';


const initialState = {
    userPhoneNumber:0,
    phoneNumber:0,
    callSID:'',
    callSuccess: 'false'
}

export const makeCall = createAsyncThunk(
    'makeCall',
    async (payload) => {
        const userPhoneNumber = '+12058505907'
        const  toNumber= payload;
        try{
            const responce = await customFetch.post('makeCall',{
                userPhoneNumber,toNumber
            }
            )
            if(responce.status ==200){
                return responce
            }
            else {
                return null
            }
        }
        catch(err) {
            return err.message
            console.log(err)
        }
    }
)

const ExtensionSlice = createSlice({
    name:'mySlice',
    initialState,
    reducers:{
        dial: (state) => {

            console.log('dial inside reducers')
        }
    },
    extraReducers: (builder) => {
        builder.addCase
        (makeCall.pending,(state) => {
            // state.isLoading = true;
            console.log('pending')
        })
        .addCase( 
        makeCall.fulfilled ,(state, {payload}) => {
            // state.userCallData = payload.data
            console.log(payload.status,' status')
            
            if(payload.status == 200){
                state.callSuccess = 'correct'
                state.callSID = payload.data
            }

            else {
                state.callSuccess = 'incorrect'
            }
        })
        .addCase(
        makeCall.rejected, (state) => {
            console.log('call rejected')
        }
        )
    }
})

export const {dial} = ExtensionSlice.actions;
export default ExtensionSlice.reducer;
