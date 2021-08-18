import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { Home, About, ContentID, Contents, More } from './pages';

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
          <Route path="/about" component={About}/>
					<Route path="/contents/:cid" component={ContentID}/>
          <Route path="/contents"  component={Contents}/>
          <Route path="/more" component={More}/>
        </Switch>
      </div>
    );
  }
}

export default App;
