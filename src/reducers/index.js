import screenReducer from './screen';
import userDataReducer from './userData';

import  { combineReducers } from 'redux';

const allReducers = combineReducers({
    screen: screenReducer,
    userData: userDataReducer
})


export default allReducers;