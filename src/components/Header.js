
// page header (with some color) contain:
// 1. user name / hello - right
// 2. title = "Wine Online" - center
// 3. Logo = link to signup - left
// 
 
import './Header.css';

export default function Header() {
  return (
    <div className="header-con">
        <div className='logo' height="100%"> {/* TODO: link to signup*/}
            <img height="50%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP9dZRjZ2oAvd8F4JISgxa1Sql4CZ8xh9ysLFwqGvmrA&s"></img>
        </div>
        <h1 className='title'>Wine Online</h1>
        <h1 className='hello'>Hello</h1>  {/* TODO: if signup print the user name*/}
    </div>
  );
}

