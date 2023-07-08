const redux = require('redux')
const createStore = redux.createStore

const CAKE_ORDERED = 'CAKE_ORDERED';

const initialState = {
    cakes: 10
}

const actionCreator = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                cakes: state.cakes - 1
            }
        default:
            return state
    }
}


const store = createStore(reducer)

console.log('initial,state', store.getState())
const unSubscribe = store.subscribe(()=>{console.log('updated state', store.getState())})

store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())

unSubscribe()

