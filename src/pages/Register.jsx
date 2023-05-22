import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import Header from './Header';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, user } = useContext(AuthContext);
    const [error, setError] = useState('');
    //const[photo,setPhoto] = useState(null);

    const handleRegister = event => {
        event.preventDefault();
        const pass = event.target;
        //  console.log(form);
        const name = pass.name.value;
        const photo = pass.photo.value;
        const email = pass.email.value;
        const password = pass.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUser(result.user, name, photo);
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }
    const updateUser = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo

        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container mx-auto'>

            <Header></Header>
            <h1 className='text-center font-bold text-2xl mt-4'>Please Register</h1>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
                            </div>
                            <label className="label">
                                Already Have an Account?<NavLink to='/login' style={({ isActive, isPending }) => {
                                    return {
                                        fontWeight: isActive ? "bold" : "",
                                        color: isPending ? "red" : "black",
                                    };
                                }} className='text-lime-950 font-semibold'>Login</NavLink>
                            </label>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;