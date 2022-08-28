
//display Signup / Start shoping / FeedBack - depend on some key in store ? maybe ?
import './Content.css';
import Signup from './content/Signup';
import Shop from './content/Shop';
import Feedback from './content/Feedback';
import { useSelector } from 'react-redux/es/exports';

export default function Content() {
    const screenType = useSelector(state => state.screen);

    function printContent() {
        switch (screenType) {
            case 'SIGNUP':
                return <Signup/>
            case 'SHOPPING':
                return <Shop/>
            case 'FEEDBACK':
                return <Feedback/>
            default:
                return <div>Empty</div>
        }
    }
    return (
        <div className="content-con">
            {printContent()}
        </div>
    );
}

