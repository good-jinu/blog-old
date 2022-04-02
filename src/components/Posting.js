import React from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import './CSS/Poststyle.css';

class Posting extends React.Component {
    //need props.mdpath
    constructor(props) {
        super(props);
        this.state = {
            po_body: ''
        };
        console.log('con: '+ this.props.mdpath)
    }

    componentDidMount() {
        axios.get(this.props.mdpath)
        .then((res)=>{ this.setState({po_body:res.data});})
        .catch((err)=>{console.error(err);});
    }

    render() {
        return (
            <div className="post-body">
                <ReactMarkdown>{this.state.po_body}</ReactMarkdown>
            </div>
        );
    }
}

export default Posting;