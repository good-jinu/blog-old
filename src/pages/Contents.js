import { Link } from 'react-router-dom';
import Header from './structure/Header';

const Contents = () => {
  return (
    <div className="mainbody">
      <Header />
      <section>
        <article>
          <h1>Hello, you!</h1>
        </article>
      </section>
    </div>
  );
}

export default Contents;
