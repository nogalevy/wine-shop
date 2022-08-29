let initalState = {
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    signin: false
}

const userDataReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'save':
            return state = {...action.payload};
        case 'delete':
            return state = {...initalState};
        default:
            return state;
    }
}


export default userDataReducer;