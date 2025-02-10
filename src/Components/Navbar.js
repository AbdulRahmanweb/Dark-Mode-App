import React from 'react';
import { useTheme } from '../Context/DarkMode';

function Navbar() {
	const {theme} = useTheme();//Get the current theme from context

	return(
		<nav id={`navbartheme-${theme}`}>
			<h1>Dark Mode</h1>
		</nav>);
}

export default Navbar;