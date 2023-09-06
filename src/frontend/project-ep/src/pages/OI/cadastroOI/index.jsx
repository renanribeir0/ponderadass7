import React, { useEffect, useState } from "react";
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
  // const [cadastroEnviado, setCadastroEnviado] = useState(false);

  const handleSubmit = (event) => {
    // event.preventDefault();
    // setDescricao(event.target.value);
    console.log({ cnpj, nome, email, senha });
  };

  const sendParceiroData = async () => {
    try {

      const response = await fetch('http://54.172.245.227:3001/parceiro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: 0, 
          // cnpj: cnpj, 
          // nome: nome, 
          // empresa: empresa, 
          // email: email, 
          // senha: senha
        })
      });

      const data = await response.json();
      console.log("Resposta da API:", data.message)
    }
    catch (error) {
      console.log("Erro ao cadastrar parceiro: ", error);
    }
  };

  // const handleCNPJChange = (event) => {
  //   console.log(event.target.value)
  //   setDescricao(event.target.value);
  //   console.log(process.env.OPENAI_API_KEY)
  // };

  // const handleEmpresaChange = (event) => {
  //   console.log(event.target.value)
  //   setDescricao(event.target.value);
  //   console.log(process.env.OPENAI_API_KEY)
  // };

  // const handleNomeChange = (event) => {
  //   console.log(event.target.value)
  //   setDescricao(event.target.value);
  //   console.log(process.env.OPENAI_API_KEY)
  // };

  // const handleEmailChange = (event) => {
  //   console.log(event.target.value)
  //   setDescricao(event.target.value);
  //   console.log(process.env.OPENAI_API_KEY)
  // };

  // const handleSenhaChange = (event) => {
  //   console.log(event.target.value)
  //   setDescricao(event.target.value);
  //   console.log(process.env.OPENAI_API_KEY)
  // };

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
              <ButtonUsage conteudo="CADASTRAR-SE" tipo="confirma CadastroOI" sendParceiroData={sendParceiroData} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
