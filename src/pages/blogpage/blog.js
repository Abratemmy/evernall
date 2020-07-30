import React from 'react';
import BlogPost from './blogPost';
import Sidebar from './sidebar.js';
import Otherpagesbg from '../otherpagesbg';

const Blog = (props) => {

    console.log(props)
    return (
        <div >
            <Otherpagesbg title="Blog" />
            <div className="container" style={{padding: '50px 0px 50px 0px'}}>            
                <div className="row">
                    <div className="col-lg-9 col-md-9 col-sm-12">
                        <BlogPost {...props} />
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
