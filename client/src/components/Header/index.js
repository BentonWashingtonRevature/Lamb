import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import '../../styles/header.css';
import logo from "../../assets/3.png"
import logoWhite from "../../assets/2.png"

import Hero1 from "../../assets/Superhero1.png"
// import Hero2 from "../../assets/Superhero-2.png"
// import Hero3 from "../../assets/Superhero-3.png"
// import Hero4 from "../../assets/Superhero-4.png"


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
            <div className="container flex-row justify-space-between-lg justify-center align-center">
                <div>
                    <Link className="text-light" to="/">
                        <h1 className="m-0">Hero.IO</h1>
                        <img id="logoWhite" src={logoWhite} alt=''/>                       
                        <img id="logo" src={logo} alt=''/>                       
                        <img id="headerpic" src={Hero1} alt=''/>

                    </Link>
                    <p className="m-0">Friendly Neighborhood Super Heroes.</p>
                </div>
                <div>
                    {Auth.loggedIn() ? (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/me">
                                {Auth.getProfile().data.username}'s profile
                            </Link>
                            <button className="btn btn-lg btn-light m-2" onClick={logout}>
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="btn btn-lg btn-info m-2" to="/login">
                                Login
                            </Link>
                            <Link className="btn btn-lg btn-light m-2" to="/signup">
                                Signup
                            </Link>
                        </>
                    )}

                    <div>
                    <img id="headerpic" src={Hero1} alt=''/>
                    </div>
                </div>



            </div>
        </header>

    )
};

export default Header;