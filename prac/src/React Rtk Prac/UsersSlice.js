/* eslint-disable no-unused-expressions */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

export const fetchUser = createAsyncThunk('users/fetchUser', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data.map((i) => i.id))
})
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action, 'action')
            state.loading = false,
                state.users = action.payload,
                state.error = ''
        }),
            builder.addCase(fetchUser.rejected, (state, action) => {
                state.loading = false,
                    state.users = [],
                    state.error = action.error.message
            }),
            builder.addCase(fetchUser.pending, (state) => {
                state.loading = true
     
        })
    }

})

export default userSlice.reducer
