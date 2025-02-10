import React from 'react';
import DarkMode from './Context/DarkMode';
import Navbar from './Components/Navbar';
import DarkTheme from './Components/DarkTheme';

function App() {
  return (
      <DarkMode>
        <Navbar />
        <DarkTheme />
        <div id='content'>
          <h1>Welcome To The Dark Mode App</h1>
        </div>
      </DarkMode>);
}

export default App;
