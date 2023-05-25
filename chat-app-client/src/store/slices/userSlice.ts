// redux dependencies
import { createSlice , PayloadAction } from "@reduxjs/toolkit";
// constracts
import { UserValuesInterface } from "../../contracts/auth";

const initialState: { user: UserValuesInterface | undefined } = {
    user: undefined
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state , action: PayloadAction<UserValuesInterface | undefined>) => {
            state.user = action.payload;
        }
    }
})

export default userSlice.reducer;

export const { setUser } = userSlice.actions;