import React from 'react'
import {Outlet} from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BaseLayout = () => {
  return (
    <div>
      <Navigation />
        <Outlet />
      <Footer/>
    </div>
  )
}

export default BaseLayout