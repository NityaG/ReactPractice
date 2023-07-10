const createSlice = require('@reduxjs/toolkit').createSlice
const asyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const fetchUser = asyncThunk('users/fetchUsers', () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data.map(i => i.id))
})

const initialState = {
    loading: false,
    user: [],
    error: ''
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false,
                state.user = action.payload,
                state.error = ''
        }),
            builder.addCase(fetchUser.rejected, (state, action) => {
                state.loading = false,
                    state.user = [],
                    state.error = action.error.message
            }),
            builder.addCase(fetchUser.pending, (state) => {
                state.loading = true
     
        })
    }

})

module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUser