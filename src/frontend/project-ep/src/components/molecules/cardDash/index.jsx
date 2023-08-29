import React, { useState, useEffect } from "react";
import styles from './styles.module.scss';

const CardDash = (props) => {
    return (
      <>
        <div className={styles.etapasBoxBodyCards}>
          <div className={styles.cardEP} onClick={props.onClick}>
            <div className={styles.cardParceiro}>
              <span className={styles.parceiroName}>{props.iniciativa.parceiro}</span>
            </div>
            <div className={styles.cardBottom}>
              <div className={styles.cardDate}>
                <div className={styles.dateIcon}>
                  <div className={styles.dateIcon2}>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
                        <path d="M4 0C4.55312 0 5 0.446875 5 1V2H9V1C9 0.446875 9.44687 0 10 0C10.5531 0 11 0.446875 11 1V2H12.5C13.3281 2 14 2.67188 14 3.5V5H0V3.5C0 2.67188 0.671875 2 1.5 2H3V1C3 0.446875 3.44688 0 4 0ZM0 6H14V14.5C14 15.3281 13.3281 16 12.5 16H1.5C0.671875 16 0 15.3281 0 14.5V6ZM2 8.5V9.5C2 9.775 2.225 10 2.5 10H3.5C3.775 10 4 9.775 4 9.5V8.5C4 8.225 3.775 8 3.5 8H2.5C2.225 8 2 8.225 2 8.5ZM6 8.5V9.5C6 9.775 6.225 10 6.5 10H7.5C7.775 10 8 9.775 8 9.5V8.5C8 8.225 7.775 8 7.5 8H6.5C6.225 8 6 8.225 6 8.5ZM10.5 8C10.225 8 10 8.225 10 8.5V9.5C10 9.775 10.225 10 10.5 10H11.5C11.775 10 12 9.775 12 9.5V8.5C12 8.225 11.775 8 11.5 8H10.5ZM2 12.5V13.5C2 13.775 2.225 14 2.5 14H3.5C3.775 14 4 13.775 4 13.5V12.5C4 12.225 3.775 12 3.5 12H2.5C2.225 12 2 12.225 2 12.5ZM6.5 12C6.225 12 6 12.225 6 12.5V13.5C6 13.775 6.225 14 6.5 14H7.5C7.775 14 8 13.775 8 13.5V12.5C8 12.225 7.775 12 7.5 12H6.5ZM10 12.5V13.5C10 13.775 10.225 14 10.5 14H11.5C11.775 14 12 13.775 12 13.5V12.5C12 12.225 11.775 12 11.5 12H10.5C10.225 12 10 12.225 10 12.5Z" fill="#2E2640"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p>23/08/2023 - 14:00h</p>
              </div>
            </div>
            {/* <div className={styles.cardCurso}>
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
            </div> */}
          </div>
        </div>
      </>
    )
}
  
export default CardDash;