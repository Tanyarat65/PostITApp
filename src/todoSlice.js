import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        colors:[],
    },
    reducers:{
        initColors:(state,action)=>{
            state.product = action.payload;
        }
    }
})

export const {initColors} = todoSlice.actions;
export default todoSlice.reducer;