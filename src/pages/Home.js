import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Home.css';

class Home extends React.Component {

  render() {
    return (
      <ul className="MainMenu responsive-font">
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/TIL">TIL</Link></li>
        <li><Link to="/more">More</Link></li>
        <li><Link to="/club">
          <img src="https://i.giphy.com/media/xT9IgM8YjXbF1b4Tgk/200w.webp" alt="club" style={{width: '25mm'}}/>
        </Link></li>
      </ul>
    );
  }
};

export default Home;
