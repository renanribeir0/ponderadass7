import React from 'react';
import Navbar from "../../../../src/components/atoms/navbar/index.jsx";
import styles from "../../OI/visualizacaoProj/styles.module.scss";
import ButtonUsage from "../../../components/atoms/botao.tsx";

const HomeOI = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className={styles.visualGeral}>
        <div className={styles.newProjectButton}>
          <ButtonUsage conteudo="+ Novo Projeto" tipo="novo Projeto" />
        </div>
        <div className={styles.welcomeMessage}>
          <p>Olá <strong>João</strong>! Bem-vindo ao <strong>Kondo</strong></p>
          <h1>Suas Iniciativas</h1>
        </div>
        <div className={styles.kanbanContainer}>
          <div className={styles.column}>
            <h2>Em Análise</h2>
            {renderProjectCard("Projeto 4", "Módulo 4:", "Prototipação de solução para IoT", "Criar um rastreador de Pneus", "Turma: N/A", "Em Análise", "yellow")}
          </div>
          <div className={styles.column}>
            <h2>Aprovado</h2>
            {renderProjectCard("Projeto 2", "Módulo 2:", "Elaboração de aplicação para ambiente web", "Website para contratação de novos empreiteiros", "Turma: 5", "Aprovado", "green")}
            {renderProjectCard("Projeto 3", "Módulo 3:", "Construção de lógica para predição com inteligência artificial", "...", "Turma: 2", "Aprovado", "green")}
          </div>
          <div className={styles.column}>
            <h2>Finalizado</h2>
            {renderProjectCard("Projeto 1", "Módulo 1:", "Desenvolvimento de jogo digital", "...", "Turma: 6", "Finalizado", "blue")}
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
