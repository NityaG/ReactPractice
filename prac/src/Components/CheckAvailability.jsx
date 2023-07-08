import React, {useState} from 'react'
import useAvailCheck from './CustomHook'

const CheckAvailability = () => {
    const [Count, setCount] = useState(0)
const isOnline = useAvailCheck(true,Count)
    return (
        <div>
            <button onClick={()=>{setCount(Count+1)}}>{!isOnline ? 'Log me in!' : 'logOut'}</button>
            {isOnline ? <label>Online </label> : <label>offline</label> }
        </div>
    )
}

export default CheckAvailability