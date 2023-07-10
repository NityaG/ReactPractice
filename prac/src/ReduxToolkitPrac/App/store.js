const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../Features/CakeSlice')
const iceCreamReducer = require('../Features/IceCreamSlice')
const calculatorReducer = require('../Features/CalculatorSlice')
const logger = require('redux-logger').createLogger()
const userReducer = require('../Features/userSlice')


const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        calculator: calculatorReducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store

