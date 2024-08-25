import "./Login.css";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setLogin({...login, [name]: value })
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/api/user/login",
                login,
                {
                    withCredentials: true
                }
            );
            setMessage(response.data.message);
            navigate("/profile");
        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <div className="login-form">
                <form onSubmit={handleLogin}>
                    <div className="login-fields">
                        <label>Email</label>
                        <input type="email" name="email" value={login.email} onChange={handleChange}/>

                        <label>Password</label>
                        <input type="password" name="password" value={login.password} onChange={handleChange}/>
                    </div>
                    <button className="login-button" type="submit">Login</button>
                </form>
                <a href="/register">Create Account</a>
                {message && <p className="alert alert-danger">{message}</p>}
            </div>
        </div>
    );
}

export default Login;