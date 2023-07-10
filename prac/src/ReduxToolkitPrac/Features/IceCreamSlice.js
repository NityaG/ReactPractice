const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'IceCream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        reStocked: (state, action) => {
            state += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions