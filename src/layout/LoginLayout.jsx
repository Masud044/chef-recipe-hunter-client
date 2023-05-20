import React from 'react';
import Login from '../pages/Login';
import Header from '../pages/Header';
import Register from '../pages/Register';

const LoginLayout = () => {
    return (
        <div>
              <Header></Header>
              <Login></Login>
              <Register></Register>
        </div>
    );
};

export default LoginLayout;