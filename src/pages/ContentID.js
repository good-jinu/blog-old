import React from 'react';
import axios from 'axios';

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
		axios.get('/blog/contents-datas.json')
		.then((res)=> {
			var targetId = this.cid;
			var arrindex = Math.floor(res.data.length/2);
			var mini = 0;
			var maxi = res.data.length;
			while(mini!==maxi) {
				if(res.data[arrindex].cid===targetId) {
					this.setState({po_title: res.data[arrindex].title});
					axios.get('/blog/postings/'+res.data[arrindex].htm)
					.then((res0)=>{this.setState({po_body: res0.data});})
					.catch((err)=> {console.error(err);});
					break;
				} else if(res.data[arrindex].cid < targetId) {
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
					<h1>{this.state.po_title}</h1>
					<div className="post-body" dangerouslySetInnerHTML={{__html: this.state.po_body}}>
					</div>
				</article>
			</section>
		);
	}
}

export default ContentID;
