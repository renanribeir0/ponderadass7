import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const CardDash = (props) => {
    return (
      <>
        <div className={styles.cardEP} onClick={props.onClick}>
          <div className={styles.cardParceiro}>
            <h1>{props.iniciativa.parceiro}</h1>
          </div>
          <div className={styles.cardCurso}>
            <h2>{props.iniciativa.curso}</h2>
          </div>
          <div className={styles.cardBottom}>
            <div className={styles.cardTema}>
              <h3>{props.iniciativa.tema}</h3>
            </div>
            <div className={styles.cardModulo}>
              <h3>Modulo:</h3>
              <p>{props.iniciativa.modulo}</p>
            </div>
          </div>
        </div>
      </>
    )
}
  
export default CardDash;