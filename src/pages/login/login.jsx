import React from "react";
import Header from "../../components/header/header";
import LoginForm from "../../components/loginForm/loginForm";

const Login = () => {
    return (
        <>
            <Header />
            <section className="main__wraper">
                <LoginForm />
            </section>
        </>
    )
}

export default Login;