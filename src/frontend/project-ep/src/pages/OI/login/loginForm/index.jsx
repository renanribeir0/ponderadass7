import React, { useState } from "react";
// import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import Navbar from "../../../../components/atoms/navbar";
import { TextField } from "@mui/material";


const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <Navbar />
      <div className={styles.formGeral}>
        <div className={styles.form}>
          <h2>Login</h2>
          <form className={styles.inputs}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            {/* Cadastro de uma senha */}
            <TextField
              label="Senha"
              variant="outlined"
              type="password"
              fullWidth
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <span>
              <Link to="/redirect">Esqueci minha senha</Link>
            </span>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;