import { createSlice } from "@reduxjs/toolkit";
import {SET_VALIDATION} from "../constants";

const initialState = {
    valSheme: 'def' // word5 word2
}

const valSheme = createSlice({
    name:'valSheme',
    initialState,
    reducers:{},
    extraReducers: (builder => {
        builder
            .addCase(SET_VALIDATION, (state, action) => {
                state.valSheme = action.payload
            })
    })
})

export default valSheme.reducer