import React, {useState, useEffect} from 'react';
import './blog.css';
import blogPost from '../../data/blog.json';

const BlogPost = (props) =>{
    const [post, setPost] = useState({
        id:"",
        blogCategory:"",
        blogTitle:"",
        postedOn:"",
        author:"",
        blogImage:"",
        blogText:""   
        
    });
    const[postId, setPostId] = useState('');

    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=>post.id == postId);
        setPost(post);
        setPostId(postId)
    },[post,props.match.params.postId]);

    if (post.blogImage===""){
        return null;
    }

    return (
        <div className="blogPostContainer">
            <div className="blogHeader">
                <span className="blogCategory">{post.blogCategory}</span>
                <div className="postTitle">{post.blogTitle}</div>
                <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>
            </div>

            <div className="postImageContainer">
                <img src={require('../../blogPostimages/' +post.blogImage )}width="100%" alt="Post-img" />
            </div>

            <div className="postContent">
                <div className="postContentTitle">{post.blogTitle}</div>
                <p className="postContentText">{post.blogText}</p>
            </div>
        </div>
    )
}

export default BlogPost
