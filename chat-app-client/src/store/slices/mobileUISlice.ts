// redux dependencies
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
// initial state interface
interface MobileUiInitialState {
    chatShow: boolean
    menuShow: boolean
}

const initialState: MobileUiInitialState = {
    chatShow: false,
    menuShow: false
}

const mobileUISlice = createSlice({
    name: "mobileUI",
    initialState,
    reducers: {
        setChatDisplay: (state , action: PayloadAction<boolean>) => {
            state.chatShow = action.payload
        },
        setMenuShow: (state , action: PayloadAction<boolean>) => {
            state.chatShow = action.payload
        }
    }
})

export default mobileUISlice.reducer;

export const { setChatDisplay } = mobileUISlice.actions;



