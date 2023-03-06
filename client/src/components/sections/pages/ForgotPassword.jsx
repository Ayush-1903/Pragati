import React, { useState } from "react";
import { SERVER_URL } from "../../../constants/constants";
import { Box, Typography } from "@mui/material";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => setEmail(e.target.value);

  const handleClick = async (e) => {
    e.preventDefault();

    const response = await fetch(`${SERVER_URL}/user/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();

    if (!response.ok) console.log(data.message);
    else {
      setMessage("Check your email for a link to reset your password");
    }
  };
  return (
    <Box>
      <form>
        <input
          type="email"
          name="forgot-password"
          id="forgot-password"
          value={email}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Forgot Password</button>
      </form>
      <Typography variant="h6">{message}</Typography>
    </Box>
  );
}
