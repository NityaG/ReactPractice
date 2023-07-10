const redux = require('redux')
const produce = require('immer').produce
const combineActions = redux.bindActionCreators
const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const ADDITION = 'ADDITION'
const SUBSTRACTION = 'SUBSTRACTION'

const additionAction = (number) => {
    return {
        type: ADDITION,
        payload: number
    }
}

const substractionAction = (number) => {
    return {
        type: SUBSTRACTION,
        payload: number
    }
}
const initialAddState = {
    add: 10
}

const addReducer = (state = initialAddState, additionAction) => {
    switch (additionAction.type) {
        case ADDITION:
            /*  return {
                 ...state,
                 add: state.add + additionAction.payload
             } */
            return produce(state, (draft) => {
                draft.add += additionAction.payload
            })
        default:
            return state
    }
}

const initialSubstractState = {
    substract: 20
}

const substractReducer = (state = initialSubstractState, substractionAction) => {
    switch (substractionAction.type) {
        case SUBSTRACTION:
            return {
                ...state,
                substract: state.substract - substractionAction.payload

            }
        default:
            return state


    }
}

const rootReducers = redux.combineReducers({
    addReducer,
    substractReducer
})

const store = createStore(rootReducers, applyMiddleware())
const actions = combineActions({ additionAction, substractionAction }, store.dispatch)

console.log('state is', store.getState())

const subscribe = store.subscribe(() => { console.log(store.getState())})
actions.additionAction(10)
actions.additionAction(10)
actions.additionAction(10)
actions.substractionAction(1)

 // subscribe()






