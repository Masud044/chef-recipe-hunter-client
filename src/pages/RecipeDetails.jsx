
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const RecipeDetails = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState([]);
    
    const [isDisabled, setIsDisabled] = useState(false);
    //console.log(id)
    useEffect(() => {
        fetch(`http://localhost:5000/recipe/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data))
    }, [])

    const { chef_name, chef_picture, ingredients, recipe_name1, recipe_name2, recipe_name3, instructions, num_recipes, years_of_experience, rating } = recipe;


    //console.log(recipe_name)
    // const handleclick = (event) => {
    //     alert('add favorite recipe');

    //     //console.log(event.currentTarget)
    //     setDisable(true);
    // }
    const handleClick = () => {
        toast('Added Successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setIsDisabled(true);
    };
    console.log(isDisabled);

    return (
        <div className='container mx-auto mt-2 mb-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={chef_picture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chef_name}</h2>


                    <p className='mb-0'> <span className=' text-lime-800'>Years of experience:</span>  {years_of_experience}</p>
                    <p className='lg:-mt-20'><span className='text-lime-800'>Numbers of recipes</span> : {num_recipes}</p>
                    <p className='lg:-mt-20'> <span className='text-lime-900 font-medium'>Likes</span> :123344</p>



                </div>
            </div>

            <div className='grid lg:grid-cols-3 mt-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/wLxbBhC/images-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className=''> <span className='text-lime-900 font-medium'>Rating</span> : 4.9</p>
                        <h2 className="card-title">Recipe name:{recipe_name1}</h2>

                        <p className='mt-4'><span className='text-2xl'>cooking method:</span>{instructions}</p>
                        {
                            ingredients?.map((i, k) => <li key={k}>{i}</li>)
                        }
                        <button disabled={disable} className=" bg-lime-800 rounded-lg w-32 p-4 text-white">Add Favorite</button>
                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/wLxbBhC/images-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className=''> <span className='text-lime-900 font-medium'>Rating</span> : 3.9</p>
                        <h2 className="card-title">Recipe name:{recipe_name2}</h2>
                        <p><span className='text-2xl'>cooking method:</span>{instructions}</p>
                        {
                            ingredients?.map((i, k) => <li key={k}>{i}</li>)
                        }
                        <button disabled={disable} className=" bg-lime-800 rounded-lg w-32 p-4 text-white">Add Favorite</button>

                    </div>
                </div>
                <div className="card card-compact  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/wLxbBhC/images-2.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className=''> <span className='text-lime-900 font-medium'>Rating</span> : 4.4</p>
                        <h2 className="card-title">Recipe name:{recipe_name3}</h2>
                        <p><span className='text-2xl'>cooking method:</span>{instructions}</p>
                        {
                            ingredients?.map((i, k) => <li key={k}>{i}</li>)
                        }


                        <button

                            onClick={handleClick}
                            disabled={isDisabled}
                            className="bg-lime-800 w-full rounded-lg btn w-32 p-4 text-white"
                        >
                            Add Favorite
                        </button>
                        <ToastContainer />
                       


                    </div>
                </div>
            </div>


        </div>
    );
};

export default RecipeDetails;