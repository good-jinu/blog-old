import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home } from './pages';

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
          <h1>Welcome<br/>to<br/>my blog</h1>
        </div>
        <Route exact path="/">
          <Home />
        </Route>
      </div>
    );
  }
}

export default App;
