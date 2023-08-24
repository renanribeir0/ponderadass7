import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "../../../components/atoms/navbar/index.jsx";
import styles from "./styles.module.scss"; 
//import ButtonUsage from "../../../components/atoms/botao.tsx";
//import Card from '../../../components/molecules/card/index.jsx'

export const HomeOI = () => {
  return (
    <>
    <Navbar/>
    <div>
      <div className={styles.kanbanContainer}>
        <div className={styles.kanbanColumn}>
          <h2>Projeto 1</h2>
          <div className={styles.card}>
            <p>Módulo 3: Modelo Preditivo</p>
            <button className={`${styles.statusButton} ${styles.green}`}>Aprovado</button>
          </div>
        </div>
        <div className={styles.kanbanColumn}>
          <h2>Projeto 2</h2>
          <div className={styles.card}>
            <p>Módulo 5 - ES: Cloud Computing</p>
            <button className={`${styles.statusButton} ${styles.green}`}>Aprovado</button>
          </div>
        </div>
        <div className={styles.kanbanColumn}>
          <h2>Projeto 3</h2>
          <div className={styles.card}>
            <p>Módulo 2: Aplicação WEB</p>
            <button className={`${styles.statusButton} ${styles.blue}`}>Finalizado</button>
          </div>
        </div>
        <div className={styles.kanbanColumn}>
          <h2>Projeto 4</h2>
          <div className={styles.card}>
            <p>Módulo 1 - Game</p>
            <button className={`${styles.statusButton} ${styles.yellow}`}>Em Análise</button>
          </div>
        </div>
      </div>
      <button className={styles.newProjectButton}>Novo Projeto</button>
    </div>
    </>
  );
};

