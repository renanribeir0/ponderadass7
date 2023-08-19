import React from "react";
import styles from './styles.module.scss';
// import ButtonUsage from "../atoms/botao";

const Card = () => {
    let switchCard= false
    const SelecionaCard = () => {
        if(switchCard){
            
        }
    } 

    return (
        <div className={styles.card} onClick={switchCard= true}>

            <div className={styles.info}>
                <h5>Módulo 05 - Engenharia de Software</h5>

            </div>
            <div className={styles.info}>
                <h4>Desenvolvimento de serviços em cloud computing</h4>

            </div>

        </div>
    )
}

export default Card;