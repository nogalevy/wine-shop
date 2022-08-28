
// left side contain 3 buttons 
// 1. singup 
// 2. start shopping
// 3. feedback
import './Menu.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeScreen } from '../actions/screen';

export default function Menu(props) {
    const userData = useSelector(state => state.userData);
    const IS_SIGNIN = userData.signin;

    const dispatch = useDispatch();
    return (
        <div className="menu-con">
            <button
                className={`menu-btn ${IS_SIGNIN && "disabled"}`}
                onClick={IS_SIGNIN ? ()=> alert('you already signed in') : () => dispatch(changeScreen('signup'))}>
                signup</button>
            <button
                className={`menu-btn ${!IS_SIGNIN && "disabled"}`}
                onClick={!IS_SIGNIN ? () => alert('you need to signup first') : () => dispatch(changeScreen('shopping'))}>
                start shopping</button>


            <button
                className={`menu-btn ${!IS_SIGNIN && "disabled"}`}
                onClick={!IS_SIGNIN ? () => alert('you need to signup first') : () => dispatch(changeScreen('feedback'))}>
                feedback</button>
        </div>
    );
}

