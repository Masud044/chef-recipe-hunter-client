import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    //console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/recipe/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    const { chef_name, chef_picture, ingredients, recipe_name, instructions, num_recipes, years_of_experience, rating } = recipe;


    //console.log(recipe_details.recipe_name)
    return (
        <div className='container mx-auto'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>

                    <ul className='list-disc text-lime-800'>

                        <li>  {recipe_name}</li>

                    </ul>
                    <p className='mb-0'> <span className=' text-lime-800'>Years of experience:</span>  {years_of_experience}</p>
                    <p className='lg:-mt-20'><span className='text-lime-800'>Numbers of recipes</span> : {num_recipes}</p>
                    <p className='lg:-mt-20'> <span className='text-lime-900 font-medium'>Likes</span> :123344</p>
                    <p className='lg:-mt-20'> <span className='text-lime-900 font-medium'>Rating</span> : {rating}</p>
                    <div className="card-actions justify-end">

                       
                        <button className="bg-lime-800 p-4 rounded-lg text-white">Favorite recipe</button>
                       
                    </div>
                </div>
            </div>



            <div className='mt-10'>

                <li>{ingredients}</li>

            </div>




            <div className='mt-4 justify-evenly'>
                <p><span className='text-2xl'>cooking method:</span>{instructions}</p>
            </div>
        </div>
    );
};

export default RecipeDetails;