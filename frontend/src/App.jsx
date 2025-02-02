import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Upload from './pages/Upload';
import Metadata from './pages/Metadata';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar /> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/metadata" element={<Metadata />} />
            </Routes>
        </Router>
    );
};

export default App;