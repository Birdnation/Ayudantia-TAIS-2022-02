import React, { useState } from 'react'
import LoginView from '../components/LoginView'
import { app } from '../configFirebase'
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(app);

const Login = () => {

    const firestore = getFirestore(app);

    const [error, setError]: any = useState(null);

    function submitHandler(e: any) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;

        console.log("submit", email, password);

        signInWithEmailAndPassword(auth, email, password).then().catch(function (error) {
            setError(error);
        });

    }


    function iniciarConGoogle(e: any) {

        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth,provider).then(googleUser => {
            const docuRef = doc(firestore, `usuarios/${googleUser.user.uid}`);
            setDoc(docuRef, { correo: googleUser.user.email, rol: "user" });
        });
    }

    return (
        <div>
            <LoginView submitHandler={(e: any) => submitHandler(e)}></LoginView>
            {error && <h1>Error al conectar</h1>}
            <button onClick={iniciarConGoogle}>Google</button>
        </div>
    )
}

export default Login