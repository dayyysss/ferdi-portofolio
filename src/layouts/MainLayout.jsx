import React from 'react';
import { NavbarLayout, Footer } from '../components';

const MainLayout = ({ children }) => {
  return (
    <div className='relative z-0 bg-primary items-center'>
      <NavbarLayout />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
