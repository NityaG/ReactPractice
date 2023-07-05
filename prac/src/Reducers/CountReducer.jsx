const Reducer = ( state, action) => {
    switch (action.type) {
        case 'add':
            return {count : state.count + 1}
        case 'sub':
            return {count: state.count - 1}

        default:
            return {count: 0}
    }

}

export default Reducer