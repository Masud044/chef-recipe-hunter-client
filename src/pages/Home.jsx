import React from 'react';
import Banner from './Banner';
import Chefs from './chefs';
import RecipeCatagory from './RecipeCatagory';
import Footer from './Footer';
import Blog from './Blog';

const Home = () => {
    return (
        <div>
             <Banner></Banner>
             <Chefs></Chefs>
             <RecipeCatagory></RecipeCatagory>
             <Footer></Footer>
            
           
        </div>
    );
};

export default Home;