import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/LoginSlice"
import newsReducer from "../features/NewsSlice"

export const Store = configureStore({
    reducer:{
        login: loginReducer,
        news: newsReducer,
    }
})
