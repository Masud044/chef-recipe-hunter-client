import React from 'react';
import banner from '../assets/recipe.jpg'

const Banner = () => {
    return (
        <div className='container mx-auto relative mb-28'>
             <h1 className='lg:text-4xl font-bold text-center text-lime-400 absolute top-16 left-4 lg:top-48 lg:left-16'>Unveiling Exquisite <br></br> Chef Recipes</h1>

              <img className='w-full' src={banner} alt="" />

              

                
        </div>
    );
};

export default Banner;