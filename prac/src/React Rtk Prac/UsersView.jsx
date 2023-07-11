import { useEffect, useState } from "react"
import { UseSelector, useDispatch, useSelector } from "react-redux"
import { fetchUser } from "./UsersSlice"


const UsersView = () => {
    const [usersData, setUsersData] = useState({
        loading: false,
        users: [],
        error: ''
    })


    const state = useSelector((state) => {
        return state.user
      /*   setUsersData({
            loading: state.user.loading,
            users: state.user.users,
            error: state.user.error
        }) */
    })
    const {loading, users, error} = state
    console.log(state, 'hi')
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUser())
       
    },[])
    return (
        <div>
            {loading && <div>loading....</div>}
            {
                error && <div>oops something went wrong!</div>
            }
            {users && users.length> 0 && 'users id are:-'}
            {
                users && 
                users.map(
                    
                    (id) => <li>{id}</li>
                )
            }
        </div>
    )
}

export default UsersView