import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state,action) => {
            return action.payload;
            // whatever the data is given in dispatch will be added to the action.payload 
            // and that will be returned as the new state in the store
        },
        removeUser: () => {
            return null;
        }
    }
})

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;