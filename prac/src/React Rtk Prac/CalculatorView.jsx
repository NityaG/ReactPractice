import {  useSelector } from "react-redux/es/hooks/useSelector"

const CalculatorView = () => {
    const count = useSelector((state)=>{
      return state.calCulator.count
    })


    return (
        <div>
            <label>{count}</label>
            <button>Increase Count using RTK</button>
            <button>Decrease Count using RTK</button>
        </div>
    )
}

export default CalculatorView