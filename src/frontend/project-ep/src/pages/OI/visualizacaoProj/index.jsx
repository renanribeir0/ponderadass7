import React, { useEffect, useState } from 'react';
import Navbar from "../../../../src/components/atoms/navbar/index.jsx";
import styles from "../../OI/visualizacaoProj/styles.module.scss";
import ButtonUsage from "../../../components/atoms/botao.tsx";

const url = 'http://127.0.0.1:3001/'

const HomeOI = () => {

  const [iniciativas, setIniciativas] = useState([]);
  const [parceiro, setParceiro] = useState({ });
  const [iniciativasParceiro, setIniciativasParceiro] = useState([]);

  
  

  useEffect(() => {
    fetch(url+'parceiro/1')
    .then((response) => response.json())
    .then((data) => {
      setParceiro(data[0]);
      console.log(data[0]);
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    fetch(url+'iniciativas')
    .then((response) => response.json())
    .then((data) => {
        setIniciativas(data);
        console.log(data);
    })
    .then(() => {
      console.log("SAMUBOYY")
      console.log(iniciativas)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    console.log(iniciativas)
    let iniciativasParceiro = iniciativas.filter(iniciativa => iniciativa.parceiroId == 1);
    // SalvarIniciativasParceiro();
    setIniciativasParceiro(iniciativasParceiro);
  }, [iniciativas])



  return (
    <div>
      <Navbar />
      <br />
      <div className={styles.visualGeral}>
        <div className={styles.newProjectButton}>
          <ButtonUsage conteudo="+ Novo Projeto" tipo="novo Projeto" />
        </div>
        <div className={styles.welcomeMessage}>
          <p>Olá, <strong>{parceiro.nomeContato}</strong>! Bem-vindo ao <strong>Kondo</strong></p>
          <h1>Suas Iniciativas</h1>
        </div>
        <div className={styles.kanbanContainer}>
          <div className={styles.column}>
            <h2>Em Análise</h2>
            {iniciativasParceiro.map((iniciativa, index) => {
              if(iniciativa.status == "Analise" || iniciativa.status == "Rejeitado"){
              return (
              renderProjectCard(`Projeto ${index}`, iniciativa.nomeModulo, iniciativa.descricao, iniciativa.mvp, iniciativa.nomeTurma, iniciativa.status, "yellow")

            )}
            else return null
          })
            
            }
          </div>
          <div className={styles.column}>
            <h2>Aprovado</h2>
            {iniciativasParceiro.map((iniciativa, index) => {
              if(iniciativa.status == "Preparado" || iniciativa.status == "Negociacao "){
              return (
              renderProjectCard(`Projeto ${index}`, iniciativa.nomeModulo, iniciativa.descricao, iniciativa.mvp, iniciativa.nomeTurma, iniciativa.status, "yellow")

            )}
            else return null
          })
            
            }
          </div>
          <div className={styles.column}>
            <h2>Finalizado</h2>
            {iniciativasParceiro.map((iniciativa, index) => {
              if(iniciativa.status == "Finalizado "){
              return (
              renderProjectCard(`Projeto ${index}`, iniciativa.nomeModulo, iniciativa.descricao, iniciativa.mvp, iniciativa.nomeTurma, iniciativa.status, "yellow")

            )}
            else return null
          })
            
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const renderProjectCard = (projectTitle, moduleTitle, moduleDescription, mvp, turma, status, statusColor) => {
  return (
    <div className={`${styles.card} ${styles[statusColor]}`}>
      <div className={styles.nomeModulo}>
        <strong>{moduleTitle}</strong>
        <p>{moduleDescription}</p>
      </div>
      <strong>MVP:</strong>
      <p>{mvp}</p>
      <p>{turma}</p>
      <div className={styles.button}>
        <button className={`${styles.statusButton} ${styles[statusColor]}`}>
          {status}
        </button>
      </div>
    </div>
  );
};

export default HomeOI;
