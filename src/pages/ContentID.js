import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './CSS/Poststyle.css'

class ContentID extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			po_title: '',
			po_body: ''
		};
		this.cid = parseInt(props.match.params.cid);
	}

	componentDidMount() {
		axios.get('https://raw.githubusercontent.com/good-jinu/TIL/master/index_blog.json')
		.then((res)=> {
			var targetId = this.cid;
			var arrindex = Math.floor(res.data.length/2);
			var mini = 0;
			var maxi = res.data.length;
			while(mini!==maxi) {
				if(arrindex===targetId) {
					this.setState({po_title: res.data[arrindex].title});
					axios.get(res.data[arrindex].md)
					.then((res0)=>{this.setState({po_body: res0.data});})
					.catch((err)=> {console.error(err);});
					break;
				} else if(arrindex < targetId) {
					mini=arrindex+1;
					arrindex = Math.floor((mini+maxi)/2);
				} else {
					maxi=arrindex;
					arrindex = Math.floor((mini+maxi)/2);
				}
			}
		})
		.catch((err)=> {
			console.error(err);
		});
	}

	render() {
		return (
			<section>
				<article className="post-article">
					<h1 className="post-title">{this.state.po_title}</h1>
					<div className="post-body">
						<ReactMarkdown>{this.state.po_body}</ReactMarkdown>
					</div>
				</article>
			</section>
		);
	}
}

export default ContentID;
