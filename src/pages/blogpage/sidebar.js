import React, {useState, useEffect} from 'react';
import './blog.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

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
                    <hr className="sidebar-text-hr" />
                    
                </div>

                <div className="profileImageContainer">
                    <img alt="Qries" src="https://res.cloudinary.com/aitechma/image/upload/v1596022363/Consulting/blogabout_qzlgzj.png"
                    width="100%"  height="200"/>
                </div>

                <div className="cardBody">
                    <div className="personalBio">My name is Uwanna, I am a consultant. You can bring your business to us and u wont regret it. A trial will convince you.</div>
                </div>
            </div>

            <div className="cardcard">
                <div className="cardHeader">
                    <span>Social network</span>
                    <hr className="sidebar-text-hr" />
                </div>

                {/* this code below is gotten from footer.js component */}
                <div className="footer-social blog-social-link text-center">
                    <ul>
                        <li><NavLink to="https://facebook.com" className="footer-Navlink"><FaFacebookF className="blog-social-icons"/> </NavLink> </li>
                        <li><NavLink to="https://twitter.com" className="footer-Navlink"><FaTwitter className="blog-social-icons"/> </NavLink> </li>
                        <li><NavLink to="https://instagram.com" className="footer-Navlink"><FaInstagram className="blog-social-icons"/> </NavLink> </li>
                    </ul>
                </div>
            </div>

            <div className="cardcard">
                <div className="cardHeader">
                    <span>Recent Post</span>
                    <hr className="sidebar-text-hr" />
                </div>

                <div className="recentPosts">

                    {
                        posts.map(post =>{
                            return(

                                <div className="" key={post.id}>
                                    <NavLink  to={`/blog/${post.id}`} className="sidebarNavlink" >
                                    <div className="recentPost" >
                                        <div>
                                            <img src = {require('../../blogPostimages/' +post.blogImage )} alt="small-img" className="recentPostimg"/>
                                        </div>
                                        
                                        <div className="recentPostItems">
                                            <div className="recentPostTitle">{post.blogTitle}</div>
                                            <span>{post.postedOn}</span>
                                        </div>
                                    </div>
                                </NavLink>
                                </div>
                            );
                        })
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar
