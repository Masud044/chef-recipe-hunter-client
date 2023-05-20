import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import {FaUserCircle } from "react-icons/fa";

const Header = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className="navbar bg-one container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/'> Home</Link>  
                        
                      <Link to='/blog'><li >Blog</li></Link>  
                    </ul>
                </div>
                <li className="btn btn-ghost normal-case text-xl text-white no-underline">Flavorsome Kitchen</li>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 ">
                <Link to='/'> <li className='text-white' > Home</li></Link> 
                <Link to='/blog'> <li className='text-white'>Blog</li></Link>  
                    
                   
                </ul>
            </div>
            <div className="navbar-end">
                {
                 user &&   <p>
                  <FaUserCircle className='text-white text-3xl'></FaUserCircle>
                </p>
                }
                 
                 {
                    user ?
                     <button className='btn bg-lime-700'>logout</button>:
                     <Link to='/login'><button className="btn bg-lime-700">login</button></Link>

                   
                 }  
                
                 
                 
                
            </div>
        </div>
    );
};

export default Header;