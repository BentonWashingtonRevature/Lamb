import React, { useState } from 'react';
import Header from './Header';
import NavTabs from './Navbar';
import Footer from './Footer';
import Requests from './pages/Requests';
import Create from './pages/Create';
import Profile from './pages/Profile';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Requests') {
        return <Requests />;
      }
      if (currentPage === 'Create') {
        return <Create />;
      }
      if (currentPage === 'My Profile') {
        return <Profile />;
      }
      return <Requests />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <Header />
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}

        <Footer />
      
      </div>
    );
  }
  