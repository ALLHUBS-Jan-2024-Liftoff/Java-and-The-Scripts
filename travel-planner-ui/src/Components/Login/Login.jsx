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

    const handleSubmit = async (e) => {
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
            <form className="login-form" onSubmit={handleLogin}>
                <div className="login-fields">
                    <label>Email</label>
                    <input type="email" value={login.email} onChange={handleChange}/>

                    <label>Password</label>
                    <input type="password" value={login.password} onChange={handleChange}/>
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;