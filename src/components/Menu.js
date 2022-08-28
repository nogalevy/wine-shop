
// left side contain 3 buttons 
// 1. singup 
// 2. start shopping
// 3. feedback
import './Menu.css';
import { useSelector, useDispatch } from 'react-redux';
import {changeScreen} from '../actions/screen';

export default function Menu(props) {
    const screenType = useSelector(state => state.screen);
    const userData = useSelector(state => state.userData);
    const IS_SIGNIN = userData.signin;

    const dispatch = useDispatch();
    return (
        <div className="menu-con">
            <button disabled={IS_SIGNIN} onClick={() => dispatch(changeScreen('signup'))}>signup</button>
            <button disabled={!IS_SIGNIN} onClick={() => dispatch(changeScreen('shopping'))}>start shopping</button>
            <button disabled={!IS_SIGNIN} onClick={() => dispatch(changeScreen('feedback'))}>feedback</button>
        </div>
    );
}

