import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './CSS/Contents.css';

class Contents extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
		this.getDatasFromServer = this.getDatasFromServer.bind(this);
	}

	componentDidMount() {
		this.getDatasFromServer();
	}

	getDatasFromServer() {
		var rows = [];
		axios.get('https://raw.githubusercontent.com/good-jinu/TIL/master/index_blog.json')
		.then((res)=> {
			for(let iii=res.data.length-1;iii>=0; iii--) {
				rows.push(res.data[iii]);
			}
			this.setState({posts: rows});
		})
		.catch((err)=>{
			console.log(err);
		});
	}

	render() {
		const showPostings = this.state.posts.map((item, index)=>
			<Link to={"/contents/"+(this.state.posts.length-index-1).toString()} key={index.toString()}>
				<div className="posting">
					<h1>{item.title}</h1>
					<p>{item.desc}</p>
				</div>
			</Link>
		);

		return (
			<div className="mainbody">
					<section>
						<article className="posting-board">
							{showPostings}
						</article>
					</section>
			</div>
		);
	}
}

export default Contents;
