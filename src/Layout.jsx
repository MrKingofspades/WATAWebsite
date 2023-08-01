import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const layouts = () => {
  return (
    <div className="App">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default layouts
