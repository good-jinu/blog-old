import React from 'react';
import { Posting } from '../components';
import './CSS/About.css';

class About extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      mdpath: "https://raw.githubusercontent.com/good-jinu/good-jinu/main/README.md"
    };
  }

  render() {
    return (
      <div className="mainbody">
        <section>
          <article className="whoAmI responsive-font">
            <div>LEE JIN WOO</div>
            <div>University student</div>
            <div>Busan, Korea</div>
          </article>
          <article>
            <Posting mdpath={this.state.mdpath} />
          </article>
        </section>
      </div>
    );
  }
}

export default About;
