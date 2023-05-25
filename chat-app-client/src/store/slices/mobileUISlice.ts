// redux dependencies
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
import {boolean} from "yup";

const initialState: { chatShow: boolean } = {
    chatShow: false
}

const mobileUISlice = createSlice({
    name: "mobileUI",
    initialState,
    reducers: {
        setChatDisplay: (state , action: PayloadAction<boolean>) => {
            state.chatShow = action.payload
        }
    }
})

export default mobileUISlice.reducer;

export const { setChatDisplay } = mobileUISlice.actions;



