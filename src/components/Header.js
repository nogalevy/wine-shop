
// page header (with some color) contain:
// 1. user name / hello - right
// 2. title = "Wine Online" - center
// 3. Logo = link to signup - left
// 
import './Header.css';
// import wine from 'public/wine.png';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { changeScreen } from '../actions/screen';
import { deleteAll } from '../actions/userData';

export default function Header() {
  const usesrData = useSelector(state => state.userData);
  const dispatch = useDispatch();

  function handleClickLogo(){
    dispatch(deleteAll());
    dispatch(changeScreen('signup'));
  }


  return (
    <div className="header-con">
        <div onClick={handleClickLogo} className='logo' height="100%"> {/* TODO: link to signup*/}
            <img width="100%" src="/wine.png"></img>
        </div>
        <h1 className='title'>Wine Online</h1>
        <h2 className='hello'>{`Hello ${usesrData.signin ? usesrData.firstName : ''}`}</h2> 
    </div>
  );
}

