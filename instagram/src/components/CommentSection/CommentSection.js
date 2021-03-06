import React, { Component } from 'react';
import './CommentSection.css';

class CommentSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comments: [],
			comment: {
        username: '',
        text: '',
			},
		}

	}

	componentDidMount() {
		this.setState({
			comments: this.props.comments,
		})
	}

  addNewComment = (event) => {
    event.preventDefault();
   
    const comments = this.state.comments.slice(0);
    comments.push(this.state.comment);

    this.setState({
      comments,
      comment: {
        username: '',
        text: '',
      }
    });

    this.props.updateComments(this.props.id, comments);

    // event.stopPropagation();
  }

  handleNewComment = (event) => {
    const comment = {
      username: 'samscha',
      text: event.target.value,
    }
    
    this.setState( { comment } );

    // event.stopPropagation();
  }

  render() {
  	return (
		<div className="CommentContainer">
			<div className="Comments">
				{this.state.comments ? this.state.comments.map((comment, i) => {
					return <div key={i} className="Comment"><strong>{comment.username}</strong> {comment.text}</div>
				}) : null}
			</div>
			<div className="PostTime">{this.props.children}</div>
			<form onSubmit={this.addNewComment}>
        <input className="CommentInput" type="text" onChange={this.handleNewComment} placeholder="Add a comment..." value={this.state.comment.text} />
      </form>			
		</div>
  	)
  }
}

export default CommentSection;