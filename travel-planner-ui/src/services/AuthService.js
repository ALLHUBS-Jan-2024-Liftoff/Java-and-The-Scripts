import axios from "axios";

const BASEAPIURL = "http://localhost:8080";

export const login = async (email, password) => {
    try {
        const response = await axios.post(`${BASEAPIURL}/api/login`, null, {
            params: {email, password},
        });

        console.log("Login Response:", response.data);

        const {token, user} = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        return user;
    } catch (error) {
        console.error("Login failed", error);
        throw error;
    }
}

export const getCurrentUser = () => {
    const user = localStorage.getItem("user");
    if (user) {
        try {
            return JSON.parse(user);
        } catch (e) {
            console.error("Failed to parse user from localStorage", e);
            return null;
        }
    }
}

export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
}