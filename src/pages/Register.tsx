import React from 'react'
import RegisterView from '../components/RegisterView'
import { app } from '../configFirebase'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, collection, setDoc } from "firebase/firestore";
const auth = getAuth(app);

const Register = () => {
    const firestore = getFirestore(app);

    async function registrarUsuario(email: string, password: string, rol: string) {
        const infoUsuario = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        ).then((usuarioFirebase) => {
            return usuarioFirebase;
        });

        console.log(infoUsuario.user.uid);
        const docuRef = doc(firestore, `usuarios/${infoUsuario.user.uid}`);
        setDoc(docuRef, { correo: email, rol: rol, algo:"algo extra" });
    }

    function submitHandler(e: any) {
        e.preventDefault();

        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rol = e.target.elements.rol.value;

        console.log("submit", email, password, rol);

        registrarUsuario(email, password, rol);

    }

  return (
    <RegisterView submitHandler={(e: any) => submitHandler(e)}></RegisterView>
  )
}

export default Register