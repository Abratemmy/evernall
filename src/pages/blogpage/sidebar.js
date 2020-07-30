import React, {useState, useEffect} from 'react';
import './blog.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar =(props) => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);


    return (
        <div className ="sidebarContainer">
            <div className="cardcard">
                <div className="cardHeader">
                    <span>About Us</span>
                    
                </div>

                <div className="profileImageContainer">
                    <img alt="Qries" src="https://res.cloudinary.com/aitechma/image/upload/v1596022363/Consulting/blogabout_qzlgzj.png"
                    width="100%"  height="200"/>
                </div>

                <div className="cardBody">
                    <div className="personalBio">My name is Uwanna, I am a consultant. You can bring your business to us and u wont regret it. A trier will convince you.</div>
                </div>
            </div>

            <div className="cardcard">
                <div className="cardHeader">
                    <span>Social network</span>
                </div>
            </div>

            <div className="cardcard">
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post =>{
                            return(
                                <NavLink key={post.id} to={`/blog/${post.id}`} >
                                    <div className="recentPost">
                                        <div className="recentPostTitle">{post.blogTitle}</div>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            );
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
