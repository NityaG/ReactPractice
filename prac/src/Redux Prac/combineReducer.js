const redux = require('redux')
const combineActions = redux.bindActionCreators
const createStore = redux.createStore

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
            return {
                ...state,
                add: state.add + additionAction.payload
            }
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

const store = createStore(rootReducers)
const actions = combineActions({ additionAction, substractionAction }, store.dispatch)

console.log('state is', store.getState())

const subscribe = store.subscribe(() => { console.log('updated', store.getState()) })
actions.additionAction(10)
actions.additionAction(10)
actions.additionAction(10)
actions.substractionAction(1)

subscribe()






