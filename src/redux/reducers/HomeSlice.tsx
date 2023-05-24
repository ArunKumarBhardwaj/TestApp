import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
    name:'home',
    initialState:{
        data:{}
    },
    reducers:{
        setApiData:(state,data) => {
            state.data = data?.payload;
        }
    }
})

export const {setApiData} = homeSlice.actions;

export default homeSlice.reducer