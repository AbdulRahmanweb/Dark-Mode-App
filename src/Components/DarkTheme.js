import React from 'react';
import { useTheme } from '../Context/DarkMode'

function DarkTheme() {
	const {theme, themeToggle} = useTheme();//Get theme and toggle functiuon

	return(
		<button style={{backgroundColor : theme === "light" ? "#000" : "#fff", color : theme === "light" ? "#fff" : "#000", fontWeight : "600"}} onClick={themeToggle}id='theme-toggle'>
			Switch to {theme === "light" ? "Dark" : "Light"} Mode
		</button>);
}

export default DarkTheme;