// left side, contain 3 buttons 
// 1. singup 
// 2. start shopping
// 3. feedback

import './Menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeScreen } from '../actions/screen';
import {SCREEN} from '../consts/screensConst'

export default function Menu() {
    const screen = useSelector(state => state.screen);
    const userData = useSelector(state => state.userData);
    const IS_SIGNIN = userData.signin;

    const dispatch = useDispatch();
    return (
        <div className="menu-con">
            <button
                className={`menu-btn ${screen === SCREEN.SIGNUP && "active"}`}
                onClick={IS_SIGNIN ? ()=> alert('You have already signed in') : () => dispatch(changeScreen(SCREEN.SIGNUP))}>
                Signup</button>
            <button
                className={`menu-btn ${screen === SCREEN.SHOPPING && "active"}`}
                onClick={!IS_SIGNIN ? () => alert('Please sign up first') : () => dispatch(changeScreen(SCREEN.SHOPPING))}>
                Start Shopping</button>
            <button
                className={`menu-btn ${screen === SCREEN.FEEDBACK && "active"}`}
                onClick={!IS_SIGNIN ? () => alert('Please sign up first') : () => dispatch(changeScreen(SCREEN.FEEDBACK))}>
                Feedback</button>
        </div>
    );
}

