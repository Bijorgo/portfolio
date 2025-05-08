import React from 'react';
import { NavLink, Link } from 'react-router';
// use NavLink when you need to see/use state
// NavLink allows .active for easy styling w CSS
// useNavigate allows programmer to nav ther user without user action


export default function NavBar() {
  return (
    <nav>
        <Link to="/"> Home |</Link>
        <Link to="/projects"> Projects |</Link>
        <Link to="/contact"> Contact Me |</Link>      
        <Link to="/error"> Error |</Link>
        <Link to="/details"> TEMP </Link>
    </nav>
  );
};
