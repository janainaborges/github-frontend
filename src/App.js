import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:username" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
