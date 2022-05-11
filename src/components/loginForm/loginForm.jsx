import { action } from "mobx";
import React, { useState } from "react";
import { AppRoute } from "../../const";


const LoginForm = () => {

    // localStorage.clear();
    console.log("localStorage", localStorage);

    const loginIn = (login, password) => {
        const request = async () => {
            const response = await fetch(`http://93.95.97.34/api/users/login`, {
                method: "POST",
                body: JSON.stringify({ "login": `${login}`, "password": `${password}` }),
                headers: new Headers({
                    'Content-type': 'application/json'
                }),
            })
            if (response.ok) {
                console.log("Все верно");
                window.location.href = `${AppRoute.TASK_LIST}`;
            } else if (response.status === 401) {
                console.log("неверные логин или пароль")
            } else if (response.status === 400) {
                console.log("Введите логин и пароль")
            }
            return await response.json()
        }
        request()
            .then((data) => (localStorage.setItem("loggedUserInfo", JSON.stringify(data))));
    }

    const [form, setForm] = useState({
        login: '',
        password: '',
    })

    const handleFieldChange = action((e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    })

    const handleSubmit = action((e) => {
        e.preventDefault();

        console.log("form", form)

        loginIn(form.login, form.password);
        localStorage.setItem("userPassword", form.password)

        console.log(localStorage.getItem("userInfo"))
        console.log(localStorage.getItem("usesPassword"))
    })

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
                        onChange={handleFieldChange}
                        placeholder="username@e.mail"
                        defaultValue="KoKa_LiNe"
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
                        onChange={handleFieldChange}
                        placeholder="********"
                        defaultValue="123"
                        name="password"
                        required
                    />
                </fieldset>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn-submit  btn-success  btn"
                >Вход
                </button>
            </div>


        </form>
    )
}

export default LoginForm;