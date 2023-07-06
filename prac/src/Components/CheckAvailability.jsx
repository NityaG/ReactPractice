import React from 'react'
import useAvailCheck from './CustomHook'

const CheckAvailability = () => {
const isOnline = useAvailCheck(true)
    return (
        <div>
            {isOnline ? <label>Online </label> : <label>offline</label> }
        </div>
    )
}

export default CheckAvailability