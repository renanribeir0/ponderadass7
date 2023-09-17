import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const CardAlocaIniciativa = (props) => {
    return (
      <>
        <div className={`${styles.main} styles.${props.className}`} onClick={props.onClick}>
            <div className={styles.conteudo}>
                <div className={`${styles.info} ${styles.nomeEmpresa}`}>
                    <strong>{props.iniciativa.nomeEmpresa}</strong>
                </div>
                <div className={styles.info}>
                    <strong>
                        Escopo: </strong> 
                    <p>
                        {props.iniciativa.escopo}
                    </p>
                </div>
                <div className={styles.info}>
                    <strong>Tema: </strong>
                    <p> {props.iniciativa.tema}</p>
                </div>
                <div className={styles.info}>
                <strong>Mercado: </strong>

                    <p>{props.iniciativa.mercado}</p>
                </div>
            </div>
          
        </div>
      </>
    )
}
  
export default CardAlocaIniciativa;