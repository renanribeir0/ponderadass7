import React, { useState } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import ButtonUsage from "../../../components/atoms/botao.tsx";
import TextField from "@mui/material/TextField";
import style from "./style.module.scss";


export const Cadastro = (props) => {
  const [cnpj, setCNPJ] = useState(""); //Puxar a API
  const [empresa, setEmpresa] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event) => {
    // event.preventDefault();
    // setDescricao(event.target.value);
    console.log({ cnpj, nome, email, senha });
  };

  return (
    <>
      {/* Importe da navbar */}
      <Navbar />
      {/* div geral com as configurações do fundo para o sass */}
      <div className={style.cadastroGeral}>
        <div className={style.formulario}>
          <h2>Cadastro</h2>
          {/* <Cadastro/> */}
          <form onSubmit={handleSubmit}>
            {/* Cadastro do CNPJ  */}
            <TextField
              label="CNPJ"
              variant="outlined"
              fullWidth
              value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)}
            />
            <br />
            {/* Cadastro do nome da empresa */}
            <TextField
              label="Nome da Empresa"
              variant="outlined"
              fullWidth
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            />
            <br />
            {/* Cadastro - Nome do responsavel */}
            <TextField
              label="Nome do representante"
              variant="outlined"
              fullWidth
              value={nome} //Atualizar com o back
              onChange={(e) => setNome(e.target.value)}
            />
            <br />
            {/* Cadastro do email */}
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
            <div className={style.botao}>
              <ButtonUsage />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
