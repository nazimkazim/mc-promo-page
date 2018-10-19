import React from 'react';
import Header from '../Components/Header-footer/Header';
import Footer from '../Components/Header-footer/Footer';

const Layout = props => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
