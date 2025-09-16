import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import AppRoutes from './components/Routes';

function App() {

  const [mode, setMode] = useState("light-mode")

  const toggleTheme = () => {
    const line = document.getElementById("line")
    if (mode === "light-mode") {
      document.documentElement.style.setProperty("--bg-color", "#000000")
      document.documentElement.style.setProperty("--text-color", "#FFFFFF")
      if (line) {
        document.getElementById("line").style.backgroundColor = "#FFFFFF"
      }
      setMode("dark-mode")
    }
    else {
      document.documentElement.style.setProperty("--bg-color", "#FFFFFF")
      document.documentElement.style.setProperty("--text-color", "#000000")
      if (line) {
        document.getElementById("line").style.backgroundColor = "#000000"
      }
      setMode("light-mode")
    }
  }

  return (
    <>
      <Navbar mode={mode} toggleTheme={toggleTheme} />
      {/* <h1 className='mainHeading' style={{ color: mode === "light-mode" ? "red" : "white" }}>Welcome To TextUtils Webiste</h1> */}
      {/* <TextBox mode={mode}/> */}
      <AppRoutes mode={mode} />
    </>
  );
}

export default App;
