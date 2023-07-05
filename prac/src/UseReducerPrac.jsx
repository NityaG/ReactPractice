import React, { useReducer } from 'react';
import Reducer from './Reducers/CountReducer'

const UseReducerPrac = () => {
const [state, dispatch] = useReducer(Reducer, {count : 0})
    return(
        <div className = 'styledDiv'>
            <label>Count: {state.count}</label>
            <button onClick={() =>dispatch({type: 'add'})}>Increase Count</button>
            <button onClick = {()=>dispatch({type: 'sub'})}>Decrease Count</button>
            <button onClick={()=>dispatch({type:''})}>Reset</button>
        </div>
    )
}

export default UseReducerPrac