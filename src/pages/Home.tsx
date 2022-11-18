import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../configFirebase'
import AdminView from '../components/AdminView';
import UserView from '../components/UserView';
const auth = getAuth(app);

const Home = ({user}:any) => {
    return (
        <div>
            {user.rol === 'admin' ? <AdminView></AdminView>:<UserView></UserView>}
            <button onClick={() => signOut(auth)}> Cerrar Sesión</button>
        </div>
    )
}

export default Home