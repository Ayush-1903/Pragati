import { createContext, useReducer, useEffect } from "react";
import { AUTH, LOGOUT } from "../constants/constants";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case AUTH:
            return { user: action.payload };
        case LOGOUT:
            return { user: null };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, authDispatch] = useReducer(authReducer, { user: null });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));

        if (user) {
            authDispatch({ type: AUTH, payload: { ...user } });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, authDispatch }}>{children}</AuthContext.Provider>
    );
};
