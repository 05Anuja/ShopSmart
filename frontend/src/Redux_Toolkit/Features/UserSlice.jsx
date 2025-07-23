import { createSlice } from "@reduxjs/toolkit";

const fakeUsers = [
  {
    username: "Anuja",
    password: "anuja@1312",
  },
  {
    username: "Aryan",
    password: "aryan@0504",
  },
  {
    username: "Saksham",
    password: "saksham@0311",
  },
  {
    username: "Sparsh",
    password: "sparsh@0705",
  },
];

const UserSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: null,
        isLoggedIn: false,
    },
    reducers: {
        login: (state, action) => {
            const {username, password} = action.payload
            const user = fakeUsers.find((user) => user.username === username && user.password === password)
            if (user) {
                state.user = user;
                state.error = null;
                state.isLoggedIn = true;
            } else {
                state.user = null;
                state.error = "INVALID USER";
                state.isLoggedIn = false;
            }
        },
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.isLoggedIn = false;
        },
    }
})

export const {login, logout} = UserSlice.actions;
export default UserSlice.reducer;