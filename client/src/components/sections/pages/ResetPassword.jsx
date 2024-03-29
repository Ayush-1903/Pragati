import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Paper, Grid, Container, TextField } from "@mui/material";
import { useResetPassword } from "../../../hooks/useResetPassword";
import styles from "../style/Reset.style";
import ResetLogo from '../images/ResetLogo.svg';

const initialState = {
  password: "",
  comfirmPassword: "",
};

export default function ResetPassword() {
  const { token } = useParams();
  const [formData, setFormData] = useState(initialState);
  const { reset, error, setError } = useResetPassword();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
    } else {
      await reset(formData.password, token);
    }
  };

  return (
        
    <div>
    <Container maxWidth="xs" sx={styles.ContainerStyle}>

      
        <img style={{marginBottom: "40px"}} src={ResetLogo} alt="" />

        <Paper sx={styles.PaperStyle} elevation={3}>

          <form sx={styles.FormStyle} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  onChange={handleChange}
                  type="text"
                  required
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  onChange={handleChange}
                  type="text"
                  required
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Container>
              <div sx={styles.ErrorStyle}>{error}</div>
            </Container>

            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={styles.button}
                >
                  Reset Password
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      
      </Container>
      <div class="area" >
          <ul class="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
          </ul>
      </div>
      
      </div>
      
  );
}
