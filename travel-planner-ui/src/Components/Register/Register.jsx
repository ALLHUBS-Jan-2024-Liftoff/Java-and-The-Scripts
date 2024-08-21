import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
    const [accountInfo, setAccountInfo] = useState({
        email: '',
        first_name: '',
        last_name: '',
        password: '',
    });
    const [message, setMessage] = "";

    const navigate = useNavigate;

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setLogin({...login, [name]: value })
    };

    const handleRegister = async (e) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/user/register",
                accountInfo,
                {
                    withCredentials
                }
            );
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
                        <input type="text" name="first_name" value={accountInfo.first_name} onChange={handleChange}/>

                        <label>Last Name</label>
                        <input type="text" name="last_name" value={accountInfo.last_name} onChange={handleChange}/>
                        
                        <label>Password</label>
                        <input type="password" name="password" value={accountInfo.password} onChange={handleChange}/>
                    </div>
                    <button type="submit">Create Account</button>
                </form>
                <a href="/login">Login to existing account</a>
                {message && <p className="alert alert-danger">{message}</p>}
            </div>
        </div>
    )
}

export default Register;