import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import './App.scss';

function App() {
  return (
    <Router>
     <div className="app">
      <Routes>
        <Route path='/' element={<><Header /><Home /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<><Header /><Checkout /></>} />
      </Routes>
     </div>
    </Router>
  );
}

export default App;

