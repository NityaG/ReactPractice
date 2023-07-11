import { useEffect } from "react"

const Second = () => {
    useEffect(() => {
        console.log('Second Component called')
    })

    return (
        <div>Hi from Second</div>
    )
}

export default Second