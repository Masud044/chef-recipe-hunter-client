import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaHandPointRight } from "react-icons/fa";

const Chefcard = ({data}) => {
  // console.log(data.data.id)
   const{id,chef_name,chef_picture,years_of_experience,num_recipes} = data;
    return (

       
            <div className="card  bg-lime-100 shadow-xl">


                <figure><img src={chef_picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title ">{chef_name}</h2>
                    <p> <span className=' text-lime-800'>Years of experience:</span>  {years_of_experience}</p>
                    <p><span className='text-lime-800'>Numbers of recipes</span> : {num_recipes}</p>
                    <p className='font-medium flex justify-items-center items-center'> <FaHandPointRight className='text-cyan-500'></FaHandPointRight>
                   : 123344</p>
                    <div className="card-actions justify-end">
                      <NavLink to={`/recipe/${id}`}  style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            };
                          }} > <button className="bg-lime-800 p-4 rounded-lg text-white">View recipe</button></NavLink> 
                    </div>
                </div>


            </div>
            

            
       


    );
};

export default Chefcard;