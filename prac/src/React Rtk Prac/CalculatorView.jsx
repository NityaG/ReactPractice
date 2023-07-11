import {  useSelector, useDispatch } from "react-redux"
import { addition, substract } from "./CalculatorSlice"

const CalculatorView = () => {
    const count = useSelector((state)=>{
       
      return state.calCulator.count
    })
    const dispatch = useDispatch()


    return (
        <div>
            <label>{count}</label>
            <button onClick={(e)=>{dispatch(addition(15))}}>Increase Count using RTK</button>
            <button onClick={(e)=>{dispatch(substract(10))}}>Decrease Count using RTK</button>
        </div>
    )
}

export default CalculatorView