import React from 'react';
import { NavLink, Link } from 'react-router';

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        Home
      </NavLink>

      <Link to="/error">Error</Link>
    </nav>
  );
};
