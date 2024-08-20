import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, changemode] = useState('light');
  
  const togglemode = () => {
    if (mode === 'light') {
      changemode('dark');
    } else {
      changemode('light');
    }
  };

  return (
    <Router>
      <>
      <Navbar title="satyam" mode={mode} togglemode={togglemode} />
        <Routes>
          <Route exact path="/navbar" element={<Navbar title="satyam" mode={mode} togglemode={togglemode} />} />
          <Route exact path="/" element={<Text />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
