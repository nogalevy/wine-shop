// page header:
// 1. user name / hello
// 2. title
// 3. Logo = link to signup screen -
//    if user connected link to signup page and log out the connected user

import './Header.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeScreen } from '../actions/screen';
import { deleteAll } from '../actions/userData';

export default function Header() {
  const usesrData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  function handleClickLogo(){
    dispatch(deleteAll());
    dispatch(changeScreen('SIGNUP'));
  }

  return (
    <div className="header-con">
        <div onClick={handleClickLogo} className='logo' height="100%"> {/*link to signup*/}
            <img alt='logo' width="100%" height='100%' src="/wine.png"></img>
        </div>
        <h1 className='title'>Wine Online</h1>
        <h2 className='hello'>{`Hello ${usesrData.signin ? usesrData.firstName : ''}`}</h2> 
    </div>
  );
}