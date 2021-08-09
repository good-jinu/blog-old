import { Header, Footer } from './structure';
import Datas from './contents-data/posted-data';
import './Contents.css';

const Contents = () => {
  const showPostings = () => {
    var rows = [];
    for(let iii=Datas.length-1; iii>=0; iii--) {
      rows.push(
	<div className="posting">
	  <h1>{Datas[iii].title}</h1>
	  <p>{Datas[iii].body}</p>
	</div>
      );
    }
    return rows
  }
  return (
    <div className="mainbody">
      <Header />
      <section>
        <article className="posting-board">
          {showPostings()}
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Contents;
