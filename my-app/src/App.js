import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideLeft from "./side/SideLeft/SideLeft";
import SideRight from "./side/SideRight/SideRight";
function App() {
  return (
    <div className="app-wrapper">
      <div className='left-side'> <SideLeft/></div>
      <div className='right-side '> <SideRight/></div>
    </div>
  );
}

export default App;
