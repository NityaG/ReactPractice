const createSlice = require('@reduxjs/toolkit').createSlice
const initialState = {
    count : 0
}
const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addition: (state, action) => {
            state.count += action.payload
        },
        substraction: (state, action) => {
            state.count -= action.payload
        },
        multiplication: (state, action) => {
            state.count *= action.payload
        },
        division: (state, action) => {
            state.count /= action.payload
        }

    }
})

module.exports = calculatorSlice.reducer
module.exports.calculatorActions = calculatorSlice.actions