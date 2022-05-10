import React from "react";


const LoginForm = () => {
    return (
        <form className="main__login-from">
            <div className="main__login-wrap">
                <h2 className="main__login-title">Авторизация</h2>
                <fieldset className="main__login-field">
                    <label htmlFor="login" className="main__login-label  label">
                        Логин
                    </label>
                    <input
                        type="email"
                        className="input"
                        placeholder="username@e.mail"
                        name="login"
                        required
                    />
                </fieldset>
                <fieldset className="main__login-field">
                    <label htmlFor="password" className="main__login-label  label">
                        Пароль
                    </label>
                    <input
                        type="password"
                        className="input"
                        placeholder="********"
                        name="password"
                        required
                    />
                </fieldset>
                <button
                    type="submit"
                    className="btn-submit  btn-success  btn"
                >Вход
                </button>
            </div>


        </form>
    )
}

export default LoginForm;