import {configureStore} from '@reduxjs/toolkit'
import calculatorReducer from './CalculatorSlice'
import usersReducer from './UsersSlice'

const store = configureStore({
    reducer : {
       calCulator : calculatorReducer,
       user : usersReducer
    }
})
export default store