import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);



    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }
    return (
        <div className="navbar bg-one container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/'  style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            };
                          }}> Home</NavLink>

                        <NavLink to='/blog'  style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            };
                          }}><li >Blog</li></NavLink>
                    </ul>
                </div>
                <li className="btn btn-ghost normal-case text-xl text-white no-underline">Flavorsome Kitchen</li>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4 ">
                    <NavLink to='/' style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}> <li className='text-white' > Home</li></NavLink>
                    <NavLink to='/blog' style={({ isActive, isPending }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isPending ? "red" : "black",
                        };
                    }}> <li className='text-white'>Blog</li></NavLink>


                </ul>
            </div>
            <div className="navbar-end">

                {
                    user && <div className='mr-2'>

                        <div className="tooltip tooltip-bottom" data-tip={user.displayName}>

                            <img className='rounded-full w-10 h-9' src={user.photoURL} alt="" />
                        </div>

                    </div>

                }

                {
                    user ?
                        <button onClick={handleLogOut} className='btn bg-lime-700'>logout</button> :
                        <NavLink to='/login '  style={({ isActive, isPending }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                              color: isPending ? "red" : "black",
                            };
                          }}><button className="btn bg-lime-700">login</button></NavLink>


                }




            </div>
        </div>
    );
};

export default Header;