import React from 'react';
import { Navbar, Footer } from '../components';

const MainLayout = ({ children }) => {
  return (
    <div className='relative z-0 bg-primary items-center'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
