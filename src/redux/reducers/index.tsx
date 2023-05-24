import { combineReducers } from "@reduxjs/toolkit";
import homeSlice from "./HomeSlice";

export const reducers = combineReducers({
    home:homeSlice
})