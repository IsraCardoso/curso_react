import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
	<nav>
		<NavLink to="/">Home</NavLink>
		<NavLink to="/about">Sobre</NavLink>
	</nav>
);

export default Navbar;
