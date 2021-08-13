import React from 'react';
import { Header, Footer } from './structure';
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
		await axios.get('/contents-datas.json')
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
			<div className="posting" key={index.toString()}>
				<h1>{item.title}</h1>
				<p>{item.body}</p>
			</div>
		);

		return (
			<div className="mainbody">
				<Header />
					<section>
						<article className="posting-board">
							{showPostings}
						</article>
					</section>
				<Footer />
			</div>
		);
	}
}

export default Contents;
