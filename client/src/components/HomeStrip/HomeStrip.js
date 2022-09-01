import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import '../../styles/header.css';
import logo from "../../assets/3.png"
// import Hero1 from "../../assets/Superhero-1.png"
// import Hero2 from "../../assets/Superhero-2.png"
// import Hero3 from "../../assets/Superhero-3.png"
// import Hero4 from "../../assets/Superhero-4.png"


const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div>
            
        </div>

    )
};

export default Header;