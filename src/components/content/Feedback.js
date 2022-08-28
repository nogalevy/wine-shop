import { useDispatch } from 'react-redux';
import { deleteAll } from "../../actions/userData";
import { changeScreen } from '../../actions/screen';

export default function Feedback() {
    const dispatch = useDispatch();

    function reset(){
        dispatch(deleteAll());
        dispatch(changeScreen('signup'));
    }
    return (
        <div className="feedback-con">
            <button onClick={reset}>Reset</button>
        </div>
    );
}

