let initalState = {
    firstName: '',
    lastName: '',
    phone: 0,
    address: '',
    confirmed: false, //maybe not?
    signin: false
}

const userDataReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'save':
            console.log(action)
            return state = {...action.payload};
        case 'delete':
            return state = {...initalState}
        default:
            return state;
    }
}


export default userDataReducer;