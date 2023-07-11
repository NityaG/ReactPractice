import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    count : 0
}

const calculatorSlice = createSlice({
    name : 'calculator',
    initialState,
    reducers: {
        addition : (state, action) => {
            state += action.payload
        },
        substract : (state, action) => {
            state -= action.payload
        }
    }
})

export default calculatorSlice.reducer
export const {addition, substract} = calculatorSlice.actions