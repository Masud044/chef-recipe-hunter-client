import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Header from './Header';

const Login = () => {
    const {signIn} = useContext(AuthContext);
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
          // navigate(from, { replace: true })
       })
       .catch(error => {
           console.log(error);
       })
  }
    return (
        <div className='container mx-auto'>
               <Header></Header>
            <h1 className='text-center font-bold text-2xl'>Please login</h1>
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