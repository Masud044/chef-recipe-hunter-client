import React from 'react';
import Banner from './Banner';
import Chefs from './chefs';

const Home = () => {
    return (
        <div>
             <Banner></Banner>

            <div> 
            <Chefs></Chefs>
            </div>
        </div>
    );
};

export default Home;