import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setReview({...login, [name]: value })
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        try {
            axios.post('http://localhost:8080/api/login', login);
            navigate('/login');
        } catch(error) {
            console.error("There was an error logging in. Please try again.", error);
            alert("There was an error logging in.");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-info">
                    <label>Email</label>
                    <input type="text" name="email" value={login.email} onChange={handleChange} />

                    <label>Password</label>
                    <input type="text" name="password" value={login.password} onChange={handleChange} />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;