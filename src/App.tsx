import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import { app } from './configFirebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(app);

function App() {
  const [user, setUser]: any = useState(null);

  const firestore = getFirestore(app);

  async function getRol(uid: string) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data()!.rol;
    return infoFinal;
  }

  function setUserWithFirebaseAndRol(usuarioFirebase: any) {

    getRol(usuarioFirebase.uid).then((rol) => {
      const userData = {
        uid: usuarioFirebase.uid,
        email: usuarioFirebase.email,
        rol: rol,
      };
      setUser(userData);
      console.log("userData final", userData);
    });
  }


  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      if (!user) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      }
    } else {
      setUser(null);
    }
  })


  return (
    <div className="App">
      {user ?
        <BrowserRouter>
          <Routes >
            <Route index element={<Home user={user}></Home>}></Route>
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter> :
        <BrowserRouter>
          <Routes >
            <Route index element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </BrowserRouter>}
    </div>
  );
}

export default App;
