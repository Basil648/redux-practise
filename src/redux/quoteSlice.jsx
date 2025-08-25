import { createSlice } from "@reduxjs/toolkit";

export const quoteSlice = createSlice({
    name: "quote1",
    initialState: {
        proverb1: "hi"
    },
    reducers: {
        change: (state) => {
            state.proverb1 = "hi da mone"
        },
        reset:(state)=>{
            state.proverb1="hi"
        }
    }
})

export const { change,reset } = quoteSlice.actions
export default quoteSlice.reducer; 