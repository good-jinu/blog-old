import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Backico from './back.png';
import Homeico from './home.png';

class NavbarController {
  constructor() {
    this.prevScrollpos = window.pageYOffset;
  }

  handleNavBar() {
    const tar = document.getElementById("header_navbar");
    const currentScrollpos = window.pageYOffset;
    if(this.prevScrollpos > currentScrollpos) {
      tar.style.marginTop = "0px";
    } else {
      tar.style.marginTop = "-30px";
    }
    this.prevScrollpos = currentScrollpos;
  }
}


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.navController = new NavbarController();
		this.goBack = this.goBack.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.navController.handleNavBar);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.navController.handleNavBar);
  }

	goBack() {
		window.history.back();
	}
  render() {
    return (
      <header id="header_navbar">
        <img src={Backico} alt="back" onClick={this.goBack}/>
        <Link to="/"><img src={Homeico} alt="home"/></Link>
      </header>
    );
  }
}

export default Header;
