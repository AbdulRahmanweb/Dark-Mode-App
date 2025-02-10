import React, { createContext, useContext, useState} from 'react';

const DarkContext = createContext();//Creating darkmode theme context

//Dark mode provider component
function DarkMode({children}) {
	const storedTheme = localStorage.getItem("theme") || "light";//Getting theme from localstorage
	const [theme, setTheme] = useState(storedTheme);//Setting theme state

	//function to toggle the theme
	function themeToggle() {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme);//Saving new theme to local storage
	}

	return(<div id='divbody'>
		 <DarkContext.Provider value={{theme, themeToggle}}>
			<div id={`theme-${theme}`}>{children}</div>
		 </DarkContext.Provider>
	</div>);
}

export const useTheme = () => useContext(DarkContext);//Custom hook to use darktheme context

export default DarkMode;