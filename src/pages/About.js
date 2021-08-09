import Header from './structure/Header';
import './About.css';

const About = () => {
  return (
    <div className="mainbody">
      <Header />
      <section>
        <article className="whoAmI responsive-font">
          <div>LEE JIN WOO</div>
          <div>University student</div>
          <div>Busan, Korea</div>
        </article>
        <article className="myworks">
          <div>
            <h1>Study project</h1>
            <ul>
              <li>Trip-plannig-service</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h1>Recently studying</h1>
            <ul>
              <li>Web programming</li>
              <li>Machine Learning</li>
            </ul>
          </div>
          <div>
            <h1>Currently i'm working at<br/>kaden96</h1>
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;
