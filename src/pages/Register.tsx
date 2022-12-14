import React, { useEffect, useState } from 'react'
import RegisterView from '../components/RegisterView';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
  } from "../firebaseConfig";

import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    async function registrarUsuario(email: string, password: string, rol: string) {
        registerWithEmailAndPassword(rol,email,password);
    }

    function submitHandler(e: any) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;

        console.log("submit", email, password, rol);

        registrarUsuario(email, password, rol);

    }

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
      }, [user, loading]);

    return (
        <div>
            <RegisterView submitHandler={(e: any) => submitHandler(e)}></RegisterView>
        </div>
    )
}

export default Register