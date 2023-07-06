import React, {useState} from 'react'

const HocPrac = (OriginalComponent) => {
    const NewComponent =(props)=> {
        const [counter, setCounter] = useState(0)
        return (
            <OriginalComponent counter={counter} incrementCounter={() => { setCounter(counter + 1) }} />
        )
    }

    return NewComponent
}

export default HocPrac







    
 
