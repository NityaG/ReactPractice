const redux = require('redux')
combineActions = redux.bindActionCreators
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const reduxThunk = require('redux-thunk').default
const axios = require('axios')
const produce = require('immer').produce
const logger = require('redux-logger').createLogger()

const initialState = {
    loading: false,
    userData: [],
    error: ''
}

const LOADING = 'LOADING'
const USERDATA = 'USERDATA'
const ERROR = 'ERROR'

const loadingAction = (payload) => {
    return {
        type: LOADING,

    }
}

const userDataAction = (users) => {

    return {
        type: USERDATA,
        payload: users
    }
}

const errorAction = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true,
               
            }
        case USERDATA:
            return produce(state, (draft) => {
                draft.userData = action.payload
            })
        case ERROR:
            return {
                loading: false,
                userData: [],
                error: action.payload
            }
       /*  default:
            return state */
    }
}

const fetchData = () => {
    return function (dispatch) {
        dispatch(loadingAction())
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response) => {
                const users = response.data.map((item) => item.id)
                dispatch(userDataAction(users))
            }
        ).catch(error => {
            dispatch(errorAction(error.message))
        })
    }
}
const store = createStore(reducer, applyMiddleware(reduxThunk))
// const actions = combineActions({ loadingAction, userDataAction, errorAction, fetchData }, store.dispatch)

const unsubscribe = store.subscribe(() => { console.log(store.getState(), 'updated') })

store.dispatch(fetchData())

// unsubscribe()


/* actions.loadingAction()
actions.userDataAction([1,2,3])
actions.errorAction('error found') */






