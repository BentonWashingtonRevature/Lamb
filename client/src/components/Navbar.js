import React from 'react';
import '../styles/Navbar.css'
// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case


// In Navbar, we can assign a style from an object by using curly braces
function Navbar({ currentPage, handlePageChange}) {
  return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        href="#requests"
        onClick={() => handlePageChange('Requests')}
        // This is a conditional (ternary) operator that checks to see if the current page is "Home"
        // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
        className={currentPage === 'Requests' ? 'nav-link active' : 'nav-link'}
      >
        Requests
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#create"
        onClick={() => handlePageChange('Create')}
        // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Create' ? 'nav-link active' : 'nav-link'}
      >
        Create
      </a>
    </li>
    <li className="nav-item">
      <a
        href="#profile"
        onClick={() => handlePageChange('Profile')}
        // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
        className={currentPage === 'Profile' ? 'nav-link active' : 'nav-link'}
      >
        Profile
      </a>
    </li>
  </ul>
  );
}

export default Navbar;