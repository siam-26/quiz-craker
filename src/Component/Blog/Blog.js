import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blogs'>
                <h4><i>1.Ques: What is the perpose of react router?</i></h4>
                <p><b>Ans:</b> React Router is a standard library for routing in React.The main perpose of React Router is developing Single Page Web Applications.It is used to define multiple routes in the application.</p>
            </div>

            <div className='blogs'>
                <h4><i>2.Ques: How does context API works?</i></h4>
                <p><b>Ans:</b> In a typical React application, data is passed top-down via props, but such usage can be cumbersome for certain types of props that are required by many components within an application. <b>Context API</b> provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>

            <div className='blogs'>
                <h4><i>3.Ques: What is <b>useHref</b> hook?</i></h4>
                <p><b>Ans:</b> The "useHref" hook returns a URL that may be used to link to the given 'to' location, even outside of React Router.</p>
            </div>
        </div>
    );
};

export default Blog;