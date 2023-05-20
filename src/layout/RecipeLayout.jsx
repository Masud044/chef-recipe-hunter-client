import React from 'react';
import Header from '../pages/Header';
import RecipeDetails from '../pages/RecipeDetails';
import Footer from '../pages/Footer';

const RecipeLayout = () => {
    return (
        <div>
             <Header></Header>
             <RecipeDetails></RecipeDetails>
             <Footer></Footer>
        </div>
    );
};

export default RecipeLayout;