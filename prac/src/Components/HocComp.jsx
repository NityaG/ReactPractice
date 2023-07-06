import React from 'react'
import HocPrac from '../Hoc/HocPrac'


const HocComp = (props) => {
    const {incrementCounter,counter} = props
return (
    <div>
       
        <label>{counter}</label>
        <button onClick = {() => {incrementCounter()}}>Hoc Example for count</button>
    </div>
)
}

export default HocPrac(HocComp)