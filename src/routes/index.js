import { Route, Switch } from 'react-router-dom';
import { About, TILID, TIL, More } from '../pages';
import { Header, Footer } from '../pages/structure';

export default function routes() {
  return (
    <>
    <Header />
    <Switch>
      <Route path="/about" component={About}/>
      <Route path="/TIL/:cid" component={TILID}/>
      <Route path="/TIL"  component={TIL}/>
      <Route path="/more" component={More}/>
    </Switch>
    <Footer/>
    </>
  )
}
