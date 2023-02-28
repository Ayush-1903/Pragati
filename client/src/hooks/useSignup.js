import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { AUTH, AUTH_URL } from "../constants/constants";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const [signupError, setSignupError] = useState(null);
    const [signupIsLoading, setSignupIsLoading] = useState(null);
    const { authDispatch } = useAuthContext();
    const navigate = useNavigate();

    const signup = async (firstName, lastName, email, password, isSchoolStudent) => {
        setSignupIsLoading(true);
        setSignupError(null);

        const response = await fetch(`${AUTH_URL}/user/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, password, isSchoolStudent }),
        });
        const json = await response.json();

        if (!response.ok) {
            setSignupIsLoading(false);
            setSignupError(json.error);
        }
        if (response.ok) {
            // save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            // update the auth context
            authDispatch({ type: AUTH, payload: json });

            // update loading state
            setSignupIsLoading(false);

            navigate("/dashboard", { replace: true });
        }
    };

    return { signup, signupIsLoading, signupError, setSignupError };
};
