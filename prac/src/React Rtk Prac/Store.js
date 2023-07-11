import {configureStore} from '@reduxjs/toolkit'
import calculatorReducer from './CalculatorSlice'

const store = configureStore({
    reducer : {
       calCulator : calculatorReducer
    }
})
export default store