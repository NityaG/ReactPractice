const store = require('./App/store')
const cakeAction = require('./Features/CakeSlice').cakeActions
const iceCreamActions = require('./Features/IceCreamSlice').iceCreamActions
const calculatorActions = require('./Features/CalculatorSlice').calculatorActions
const combineActions = require('redux').bindActionCreators
const fetchUser = require('./Features/userSlice').fetchUsers
console.log(store.getState())
const unSubscribe = store.subscribe(() => {
  //  console.log('updated State', store.getState())
})

/* const actions = combineActions({cakeAction, iceCreamActions}, store.dispatch())

actions.cakeAction.ordered(5)
actions.cakeAction.ordered(5)
actions.cakeAction.ordered(5)
actions.cakeAction.reStocked(5)

actions.iceCreamActions.ordered(5)
actions.iceCreamActions.ordered(5)
actions.iceCreamActions.reStocked(5) */


 store.dispatch(cakeAction.ordered(5))
store.dispatch(cakeAction.ordered(5))
store.dispatch(cakeAction.ordered(5))
store.dispatch(cakeAction.reStocked(5))

store.dispatch(iceCreamActions.ordered(5))
store.dispatch(iceCreamActions.ordered(5))
store.dispatch(iceCreamActions.ordered(5))
store.dispatch(iceCreamActions.reStocked(5)) 


store.dispatch(calculatorActions.addition(1000))
store.dispatch(calculatorActions.substraction(300))
store.dispatch(calculatorActions.division(300))
store.dispatch(calculatorActions.multiplication(300))

store.dispatch(fetchUser())
// unSubscribe()