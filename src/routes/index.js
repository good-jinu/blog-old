import { Route, Switch } from 'react-router-dom';
import { About, ContentID, Contents, More } from '../pages';
import { Header, Footer } from '../pages/structure';

export default function routes() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/contents/:cid" component={ContentID}/>
      <Route path="/contents"  component={Contents}/>
      <Route path="/more" component={More}/>
    </Switch>
    <Footer/>
    </>
  )
}
