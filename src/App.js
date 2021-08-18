import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages';
import routes from './routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.openingEnd = this.openingEnd.bind(this);
  }

  openingEnd(e) {
    e.target.style.display = 'none';
  }

  render() {
    return (
      <div className="App">
        <div id="opening" onAnimationEnd={this.openingEnd}>
          <h1 className="responsive-font">Welcome<br/>to<br/>my blog</h1>
        </div>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:pth" component={routes}/>
        </Switch>
      </div>
    );
  }
}

export default App;
