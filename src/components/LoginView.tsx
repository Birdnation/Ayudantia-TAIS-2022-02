import React from 'react'

const LoginView = ({ submitHandler }: any) => {
    return (
        <form onSubmit={submitHandler}>
            <h1 className='text-danger'>Login</h1>
            <label>
                Correo electrónico:
                <input type="email" id="email" />
            </label>

            <label>
                Contraseña:
                <input type="password" id="password" />
            </label>

            <input
                type="submit"
                value={"Iniciar Sesión"}
            />
        </form>
    )
}

export default LoginView