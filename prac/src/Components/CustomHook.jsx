import React, { useEffect, useState } from 'react'

const useAvailCheck = (avail, Count) => {
const [isOnline, setIsOnline ] = useState(false)

useEffect(()=>{
    console.log('called')
    setIsOnline(avail)
},[Count])
  
return isOnline


}

export default useAvailCheck