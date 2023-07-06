import React, { useEffect, useState } from 'react'

const useAvailCheck = (avail) => {
const [isOnline, setIsOnline ] = useState(false)

useEffect(()=>{
    console.log('called')
    setIsOnline(avail)
})
  
return isOnline


}

export default useAvailCheck