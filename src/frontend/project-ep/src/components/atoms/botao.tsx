import React from "react";
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const ButtonUsage = (props) => {

  const sendCardData = async () => {
    if (!props.selectedIniciativa) {
        alert("Nenhum card selecionado!");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3001/iniciativas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.selectedIniciativa)
        });

        const data = await response.json();
        console.log("Resposta da API:", data.message);
    } catch (error) {
        console.error("Erro ao enviar cardData:", error);
    }
  };

  const navigate = useNavigate();

  return <Button variant="contained" onClick={() => {
    if (props.tipo == "envia Iniciativa") {

      sendCardData()
      props.setIsModalOpen(true)
    }
    else if(props.tipo == "envia Problema") {
      props.setProblemaEnviado(true)
      props.iteraModulos(props.descricao)
    }
    else if(props.tipo == "confirma Login"){
      navigate("/Home")
    }
    else if(props.tipo == "confirma CadastroOI"){
      props.sendParceiroData()
      navigate('/Home')
    }
    else if(props.tipo == "novo Projeto") {
      navigate('/iniciativas')
    }
    else if(props.tipo == "aloca Iniciativa"){
      console.log(props.celula)
      console.log("CHEGUEI NO BOTÃO")
      props.alocaIniciativa(props.celula, props.iniciativa)
      props.setIsModalOpen(false)
    }
  }} disabled={props.disabled}>{props.conteudo}</Button>;
  
}

export default ButtonUsage;