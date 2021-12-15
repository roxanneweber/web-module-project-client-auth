import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<header>
			<h2>Friends Database</h2>
			<Link className='link' to='/login'>
				Login
			</Link>
			<Link className='link' to='/friends'>
				Friends List
			</Link>
			<Link className='link' to='/friends/add'>
				Add Friend
			</Link>
			<Link className='link' to='/logout'>
				Logout
			</Link>
		</header>
	);
};

export default NavBar;
