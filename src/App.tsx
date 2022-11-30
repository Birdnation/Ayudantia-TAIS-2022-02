import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Register from './pages/Register';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<Home></Home>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
