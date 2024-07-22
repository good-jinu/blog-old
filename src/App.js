import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, Club } from './pages';
import routes from './routes';
import {setCookie, getCookie} from './jslib/CookieIO';
import CatPage from "./pages/cat";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openingEnd = this.openingEnd.bind(this);
    this.openBox = null;
    if(!getCookie('Visited'))
    {
      this.openBox = (
        <div id="opening" onAnimationEnd={this.openingEnd}>
          <h1 className="responsive-font">Welcome<br/>to<br/>my blog</h1>
        </div>
      );
    }
  }

  openingEnd(e) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000*36000;
    now.setTime(expireTime);
    setCookie('Visited', '1', now);
    e.target.style.display = 'none';
  }

  render() {
    return (
      <div className="App">
        {this.openBox}
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/club" component={Club}/>
          <Route exact path="/cat" component={CatPage} />
          <Route path="/:pth" component={routes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
