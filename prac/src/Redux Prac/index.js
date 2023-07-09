const redux = require('redux')
const createStore = redux.createStore
const bindActionCreator = redux.bindActionCreators

// constant for action types
const CAKE_ORDERED = 'CAKE_ORDERED';
const RESTOCK_CSKE = 'RESTOCK_CAKE';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const RESTOCK_ICECREAM = 'RESTOCK_ICECREAM'


const initialState = {
    cakes: 10,
    iceCream: 20
}

const cakeOrdered = () => {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

const restockCake = (quantity) => {
    return {
        type: RESTOCK_CSKE,
        payload: quantity
    }
}

const iceCreamOrdered = () => {
    return {
        type: ICECREAM_ORDERED,
        payload: 1

    }
}

const restockIceCream = (quantity) => {
    return {
        type: RESTOCK_ICECREAM,
        payload: quantity
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                cakes: state.cakes - 1
            }
        case RESTOCK_CSKE:
            return {
                ...state,
                cakes: state.cakes + action.payload
            }

        case ICECREAM_ORDERED:
            return {
                ...state,
                iceCream: state.iceCream - 1
            }
        case RESTOCK_ICECREAM:
            return {
                ...state,
                iceCream: state.iceCream + action.payload
            }
        default:
            return state
    }
}


const store = createStore(reducer)

console.log('initial,state', store.getState())
const unSubscribe = store.subscribe(() => { console.log('updated state', store.getState()) })

actions = bindActionCreator({ cakeOrdered, restockCake, iceCreamOrdered, restockIceCream }, store.dispatch)

actions.cakeOrdered()
actions.cakeOrdered()
actions.cakeOrdered()
actions.restockCake(5)
actions.restockCake(10)
actions.cakeOrdered()
actions.iceCreamOrdered()
actions.iceCreamOrdered()
actions.iceCreamOrdered()
actions.restockIceCream(6)
/* store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(restockCake(5))
store.dispatch(restockCake(10))
store.dispatch(cakeOrdered()) */

unSubscribe()


