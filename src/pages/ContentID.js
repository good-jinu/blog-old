import React from 'react';
import axios from 'axios';
import { Posting } from '../components';
import './CSS/ContentID.css';

class ContentID extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			po_title: '',
			mdpath: '',
			mdbody: null
		};
		this.cid = parseInt(props.match.params.cid);
	}

	componentDidMount() {
		axios.get('https://raw.githubusercontent.com/good-jinu/TIL/master/index_blog.json')
		.then((res)=> {
			this.setState({po_title: res.data[this.cid].title});
			this.setState({mdpath: res.data[this.cid].md});
			this.setState({mdbody: (<Posting mdpath={this.state.mdpath} />)});
		})
		.catch((err)=> {
			console.error(err);
		});
	}

	render() {
		return (
			<section>
				<article>
					<h1 className="post-title">{this.state.po_title}</h1>
					{this.state.mdbody}
				</article>
			</section>
		);
	}
}

export default ContentID;
