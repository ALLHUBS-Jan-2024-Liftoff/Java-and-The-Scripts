import "./Register.css";

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register({setAuthenticated}) {
    const [accountInfo, setAccountInfo] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });
    const [message, setMessage] = useState("");

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setAccountInfo({...accountInfo, [name]: value })
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:8080/api/user/register",
                accountInfo,
                {
                    withCredentials: true
                }
            );
            setAuthenticated(true);
            setMessage(response.data.message);
            navigate("/profile");
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div>
            <h1>Create Account</h1>
            <div className="register-form">
                <form onSubmit={handleRegister}>
                    <div className="registration-fields">
                        <label>Email</label>
                        <input type="email" name="email" value={accountInfo.email} onChange={handleChange}/>

                        <label>First Name</label>
                        <input type="text" name="firstName" value={accountInfo.firstName} onChange={handleChange}/>

                        <label>Last Name</label>
                        <input type="text" name="lastName" value={accountInfo.lastName} onChange={handleChange}/>

                        <label>Password</label>
                        <input type="password" name="password" value={accountInfo.password} onChange={handleChange}/>
                    </div>
                    <button className="register-button" type="submit">Create Account</button>
                </form>
                <a href="/login">Login to existing account</a>
                {message && <p className="alert alert-danger">{message}</p>}
            </div>
        </div>
    )
}

export default Register;