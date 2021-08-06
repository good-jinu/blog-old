import { Link } from 'react-router-dom';
import './About.css';
const About = () => {
  return (
    <div className="mainbody">
      <header>
        <div className="toHome"><Link to="/">To home</Link></div>
      </header>
      <section>
        <article className="whoAmI responsive-font">
          <div>LEE JIN WOO</div>
          <div>University student</div>
          <div>Busan, Korea</div>
        </article>
      </section>
    </div>
  );
}

export default About;
