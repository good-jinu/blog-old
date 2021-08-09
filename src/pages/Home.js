import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends React.Component {

  render() {
    return (
      <ul className="MainMenu responsive-font">
        <li><Link to="/about">About me</Link></li>
        <li><Link to="/contents">Contents</Link></li>
        <li><Link to="/more">More</Link></li>
      </ul>
    );
  }
};

export default Home;
