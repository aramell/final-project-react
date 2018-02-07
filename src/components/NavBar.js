import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/flights">Flights</NavLink>
      <NavLink to="/new">Create New Flight</NavLink>
      
    </div>
  );
};
export default NavBar