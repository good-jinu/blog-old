import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './CSS/About.css';
import './CSS/Poststyle.css';

class About extends React.Component {
  constructor(props)
  {
    super(props);
    this.state ={
      po_body: ""
    };
  }

  componentDidMount()
  {
    axios.get('https://raw.githubusercontent.com/good-jinu/good-jinu/main/README.md')
    .then((res)=> {
      this.setState({po_body: res.data});
    })
    .catch((err)=>{
      console.error(err);
    });
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
          <article className="post-article">
            <div className="post-body">
              <ReactMarkdown>{this.state.po_body}</ReactMarkdown>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default About;
