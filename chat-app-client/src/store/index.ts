// redux dependencies
import { configureStore } from "@reduxjs/toolkit";
// reducers
import { userSlice , mobileUISlice } from "./slices";

export const store = configureStore({
    reducer: {
        user: userSlice,
        mobileUI: mobileUISlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;