const initalState = {
    firstName: '',
    lastName: '',
    phone: 0,
    address: '',
    confirmed: false, //maybe not?
    signin: false
}

const userDataReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'firstname':
            return state = {...state , firstName: action.payload};
        case 'lastname':
            return state = {...state , lastName: action.payload};
        case 'phone':
            return state = {...state , phone: action.payload};
        default:
            return state;
    }
}


export default userDataReducer;