const screenReducer = (state = 'SIGNUP', action) => {
    switch (action.type) {
        case 'signup':
            return state = 'SIGNUP';
        case 'shopping':
            return state = 'SHOPPING';
        case 'feedback':
            return state = 'FEEDBACK';
        default:
            return state;
    }
}

export default screenReducer;