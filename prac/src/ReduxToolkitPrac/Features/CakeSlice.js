const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10,
    cancellationMessage: ''
}
const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state, action) => {
            if (state.numOfCakes >= action.payload) {
                state.numOfCakes -= action.payload
                state.cancellationMessage = ''
            }
            else
                state.cancellationMessage = 'Sorry out of stock'
        },
        reStocked: (state, action) => {
            state.numOfCakes += action.payload
            state.cancellationMessage = ''
        }
    }
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
