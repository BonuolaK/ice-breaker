import axios from 'axios';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import IceBreaker from './pages/icebreaker';
import Landing from './pages/landing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="app-slogan">
          Start IceBreaker !!!
        </p>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/icebreaker/:sessionId/user/:userId" element={<IceBreaker/>}/>
        </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
