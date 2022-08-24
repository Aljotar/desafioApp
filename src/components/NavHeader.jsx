import React from 'react';
import { Link } from "react-router-dom";

export const NavHeader = () => {
  return (
    <header className='homeHeader'>
      <Link to="/table">
        <button>Table</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
    </header>
  )
}
