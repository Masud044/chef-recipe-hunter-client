import React from 'react';
import Header from './Header';
import Pdf from "react-to-pdf";
import ReactDOM from "react-dom";
const ref = React.createRef();

const Blog = () => {
    return (

        <div className='container mx-auto'>
            <div className='mb-20'>
                <Header></Header>
            </div>
            <div className='mb-4 '>
                <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf} className='bg-lime-600 p-2 text-white rounded'>Download Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref}>
                <div className='border-2 border-lime-700 p-4 mb-4'>
                    <h1 className='text-2xl font-medium'>Tell us the differences between uncontrolled and controlled components:</h1>
                    <p className='font-serif'>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally</p>
                </div>
                <div className='border-2 border-lime-700 p-4 mb-4'>
                    <h1 className='text-2xl font-medium'>How to validate React props using PropTypes:</h1>
                    <p className='font-serif'>With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.

                        To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.</p>
                </div>
                <div className='border-2 border-lime-700 p-4 mb-4'>
                    <h1 className='text-2xl font-medium'>Tell us the difference between nodejs and express js.:</h1>
                    <p className='font-serif'>Node.js brought JavaScript to the next level. While JavaScript is used as a client-side development language, Node.js covers the server-side programming. Thanks to the Node.js, JavaScript has become an all-purpose full-stack development language.

                        The JS frontend and Node.js backend are easier to keep in sync because of a single language used on both sides of the application. Node.js allows your programs to be written in JavaScript and to be executed on the server.

                        Express.js is a minimal, flexible, and open-source Node.js web application framework. You can use it on top of Node.js to ensure better web functionality. Express is the most popular Node.js web framework.

                        What it provides is a vast set of features for building web applications (single, multi-page, and hybrid). With Express, you can structure a web application that can handle multiple HTTP requests at a certain URL.

                        Flexibility is visible in numerous components accessible on a package manager. These components automatically persevere into Express.js.

                    </p>
                </div>
                <div className='border-2 border-lime-700 p-4 mb-4'>
                    <h1 className='text-2xl font-medium'>What is a custom hook, and why will you create a custom hook?:</h1>
                    <p className='font-serif'>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

                        That’s it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function. If that function calls other hooks, like useEffect, useState, or maybe another custom hook, then your function is itself a hook, and, by convention, should be given a name that starts with “use” to make it clear that it is a hook.</p>
                </div>



            </div>



        </div>
    );
};

export default Blog;