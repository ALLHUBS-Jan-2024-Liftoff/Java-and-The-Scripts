import './Login.css';

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const { login } = useAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            navigate("/profile");
        } catch (error) {
            setError("Login failed. Please check your credentials.");
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-info">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>

                    {error && <div className="alert alert-danger">{error}</div>}
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;