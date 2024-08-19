import React, {createContext, useContext, useState, useEffect} from "react";
import {
    isAuthenticated,
    getCurrentUser,
    login as authServiceLogin,
} from "../services/AuthService.js"

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = getCurrentUser();
        if (currentUser) {
            setUser(currentUser);
        }
    }, []);

    const handleLogin = async (email, password) => {
        console.log("Handling login.");
        try {
            const user = await authServiceLogin(email, password);
            setUser(user);
            return user;
        } catch (error) {
            console.error("Login failed", error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login: handleLogin,
                isAuthenticated: isAuthenticated(),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};