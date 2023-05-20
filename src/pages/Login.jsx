import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Header from './Header';
import { FaGoogle,FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const[error,setError]=useState('');
    const googleProvider  = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';

  const handleLogin=event=>{
     event.preventDefault();
      const pass = event.target;
       const email = pass.email.value;
       const password = pass.password.value;
       console.log(email,password);
       signIn(email, password)
       .then(result => {
           const loggedUser = result.user;
           console.log(loggedUser);
           navigate(from,{replace:true})
         
       })
       .catch(error => {
           console.log(error);
           setError(error.message)
       })
  }
  const handleGoogle =()=>{
     signInWithPopup(auth,googleProvider)
     .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from,{replace:true})
      
    })
    .catch(error => {
        console.log(error);
       // setError(error.message)
    })
  }
  const handleGithub =()=>{
    signInWithPopup(auth,githubProvider)
     .then(result => {
        const loguser = result.user;
        console.log(loguser);
        navigate(from,{replace:true})
      
    })
    .catch(error => {
        console.log(error);
       // setError(error.message)
    })

  }
    return (
        <div className='container mx-auto'>
               <Header></Header>
            <h1 className='text-center font-bold text-2xl mt-4 mb-2'>Please login with  </h1>
            <div className='grid gap-4 justify-items-center text-3xl mb-2'>
                
            
             <button onClick={handleGoogle}> <FaGoogle className='text-green-800' ></FaGoogle></button>
             <button onClick={handleGithub}> <FaGithub className='text-green-800' ></FaGithub></button>
             </div>

           
            <div className="hero  bg-base-200">
                <div  className="hero-content flex-col lg:flex-row-reverse">
                  
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" required  className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password'  placeholder="password"  required  className="input input-bordered"/>
                               
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                    Don't Have an Account?<Link to='/register' className='text-lime-950 font-semibold'>Register</Link>
                                </label>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;