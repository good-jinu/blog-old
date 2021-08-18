import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Contents.css';

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

	async getDatasFromServer() {
		var rows = [];
		await axios.get('/blog/contents-datas.json')
		.then((res)=> {
			for(let iii=res.data.length-1;iii>=0; iii--) {
				rows.push(res.data[iii]);
			}
		})
		.catch((err)=>{
			console.log(err);
		});
		await this.setState({posts: rows});
	}

	render() {
		const showPostings = this.state.posts.map((item, index)=>
			<Link to={"/contents/"+item.cid.toString()} key={index.toString()}>
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
