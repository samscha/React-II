import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css';

const PostContainer = (props) => {
  const post = props.postData;
  console.log(post)
  return (
    <div className="PostContainer">
      <div className="PostHeader">
        <img className="PostHeader__thumbnail" src={post.thumbnailUrl} alt={`${post.username}-thumbnail`} />
        <div className="PostHeader__username">{post.username}</div>
      </div>
      <div className="PostImage">
        <img className="PostImage__image" src={post.imageUrl} alt={`${post.username}-pic`} />
      </div>
      <div className="PostLikes">
        <div>{post.likes} likes</div>
      </div>
      <div className="PostCommentsContainer">
        <CommentSection comments={post.comments}/>
      </div>
      <div className="PostFooter"></div>
    </div>
  )
}

export default PostContainer;