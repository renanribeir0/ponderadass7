import React from "react";
import Button from '@mui/material/Button';

const ButtonUsage = (props) => {

  const sendCardData = async () => {
    if (!props.selectedCard) {
        alert("Nenhum card selecionado!");
        return;
    }

    try {
        const response = await fetch('http://127.0.0.1:3001/iniciativas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.selectedCard)
        });

        const data = await response.json();
        console.log("Resposta da API:", data.message);
    } catch (error) {
        console.error("Erro ao enviar cardData:", error);
    }
  };

  return <Button variant="contained" onClick={() => {
    if (props.enviaIniciativa) {

      sendCardData()
      props.setIsModalOpen(true)
    }
    else {
      props.setProblemaEnviado(true)
      props.iteraModulos(props.descricao)
    }
  }} disabled={props.disabled}>Confirmar</Button>;
  
}

export default ButtonUsage;