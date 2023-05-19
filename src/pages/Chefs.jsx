import React, { useEffect, useState } from 'react';
import Chefcard from './Chefcard';


const Chefs = () => {

    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/recipe")
            .then(res => res.json())
            .then(data => setRecipeData(data))
            .catch(error => console.log(error))
    }, [])
    // console.log(recipeData)



    return (
        <div className='container mx-auto grid lg:grid-cols-3 gap-4 mb-4'>

             {
                 recipeData.map(data=>  <Chefcard 
                  key={data.id}
                  data={data}
                 ></Chefcard>
                    
                 )
             }

        </div>
    );
};

export default Chefs;