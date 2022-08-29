import { SCREEN } from "../consts/screensConst";

//update the state to current screen
const screenReducer = (state = SCREEN.SIGNUP, action) => {
    return state = SCREEN[action.type] || SCREEN.SIGNUP;
}

export default screenReducer;