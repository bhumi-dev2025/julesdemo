import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh', padding: '2rem 0' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
