//display Signup / Start shoping / Feedback content

import './Content.css';
import Signup from './content/Signup';
import Shop from './content/Shop';
import Feedback from './content/Feedback';
import { useSelector } from 'react-redux/es/exports';
import { SCREEN } from '../consts/screensConst.js';

export default function Content() {
    const screenType = useSelector(state => state.screen);

    function printContent() {
        switch (screenType) {
            case SCREEN.SIGNUP:
                return <Signup />
            case SCREEN.SHOPPING:
                return <Shop />
            case SCREEN.FEEDBACK:
                return <Feedback />
            default:
                return <div>Page Not Found</div>
        }
    }

    return (
        <div className="content-con">
            {printContent()}
        </div>
    );
}