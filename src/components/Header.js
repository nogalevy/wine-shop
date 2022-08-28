
// page header (with some color) contain:
// 1. user name / hello - right
// 2. title = "Wine Online" - center
// 3. Logo = link to signup - left
// 
import './Header.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeScreen } from '../actions/screen';

export default function Header() {
  const usesrData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  return (
    <div className="header-con">
        <div onClick={()=>dispatch(changeScreen('signup'))} className='logo' height="100%"> {/* TODO: link to signup*/}
            <img height="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9dZRjZ2oAvd8F4JISgxa1Sql4CZ8xh9ysLFwqGvmrA&s"></img>
        </div>
        <h1 className='title'>Wine Online</h1>
        <h1 className='hello'>{`Hello ${usesrData.signin ? usesrData.firstName : ''}`}</h1> 
    </div>
  );
}

