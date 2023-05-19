import React from 'react';
import Header from '../pages/Header';
import RecipeDetails from '../pages/RecipeDetails';

const RecipeLayout = () => {
    return (
        <div>
             <Header></Header>
             <RecipeDetails></RecipeDetails>
        </div>
    );
};

export default RecipeLayout;