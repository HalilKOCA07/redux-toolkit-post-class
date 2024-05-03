import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {email:"", password:""}
}

const LoginSlice = createSlice({
  name: "login", //*action type
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //     state.user = action.payload
    // }
    setUser: (state, {payload}) => {
        state.user = payload

    },
    clearUser: (state) => {
        state.user = {email:"", password:""}
    }
  }
});
//? olusan action fonksiyonları LoginSlice.actions 'dan destructure edilerek export edildi
export const {setUser, clearUser} = LoginSlice.actions

//? yazilan slice'in reducer'i LoginSlice.reducer seklinde export edildi.
export default LoginSlice.reducer