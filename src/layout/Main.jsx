import React from 'react';
import Header from '../pages/Header';
import { Outlet } from 'react-router-dom';
import Blog from '../pages/Blog';


const Main = () => {
    return (
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
           
             
        </div>
    );
};

export default Main;