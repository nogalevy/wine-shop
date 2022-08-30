// page header:
// 1. user name / hello
// 2. title
// 3. Logo = link to signup - if connected alert, else redirect to signup

import './Header.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeScreen } from '../actions/screen';
import { SCREEN } from '../consts/screensConst'

export default function Header() {
  const usesrData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  function handleClickLogo() {
    if (usesrData.signin)
      alert('You have already signed in');
    else
      dispatch(changeScreen(SCREEN.SIGNUP))
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