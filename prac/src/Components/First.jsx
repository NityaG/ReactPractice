import { useEffect } from "react"
import Second from "./Second"

const First = () => {
    useEffect(() => {
        console.log('First Component called')
    })



    return (
        <div>Hi from First
            <Second />
        </div>
    )
}

export default First