import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="toHome"><Link to="/">To home</Link></div>
    </header>
  );
}

export default Header;
