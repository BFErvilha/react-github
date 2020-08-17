import React from 'react';
import { Redirect } from 'react';
import './assets/css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/Home';
import { UserStorage } from './UserContext';
import Header from './components/PageComponent/Header';
import Footer from './components/PageComponent/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="home" element={<Home />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
