import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 0
}

const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers: {
        addition : (state, action) => {
            state.count += action.payload
        },
        substract : (state, action) => {
            state.count -= action.payload
        }
    }
})

export default calculatorSlice.reducer
export const {addition, substract} = calculatorSlice.actions