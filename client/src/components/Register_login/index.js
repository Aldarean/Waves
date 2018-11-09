import React from 'react';
import MyButton from "../utils/button";
import Login from './login';

const RegisterLogin = () => {
  return (
    <div  className="page_wrapper">
        <div className="container">
            <div className="register_login_container">

                <div className="left">
                    <h1>New Customers</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quo alias rem amet cupiditate aut aliquam nisi adipisci nemo voluptatem quis, nam magnam pariatur debitis iste, fuga distinctio. Alias, quidem.</p>
                    <MyButton
                        type="default"
                        title="Create an account"
                        linkTo="/register"
                        addStyles={{
                            margin: '10px 0 0 0'
                        }}
                     />
                </div>

                <div className="right">
                    <h2>Registered customers</h2>
                    <p>If you have an account please log in.</p>
                    
                    <Login />

                </div>

            </div>
        </div>
    </div>
  )
}

export default RegisterLogin
