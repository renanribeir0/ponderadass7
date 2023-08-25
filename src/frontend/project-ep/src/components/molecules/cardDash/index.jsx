import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const CardDash = (props) => {
    return (
      <>
        <div className={styles.cardEP} onClick={props.onClick}>
          <div className={styles.cardParceiro}>
            <h1>Instituto de Tecnologia e Liderança</h1>
          </div>
          <div className={styles.cardCurso}>
            <h2>Engenharia de Software</h2>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.cardTema}>
              <h3>Gestão Operacional</h3>
            </div>
            <div className={styles.cardModulo}>
              <h3>Modulo:</h3>
              <p>05</p>
            </div>
          </div>
        </div>
      </>
    )
}
  
export default CardDash;