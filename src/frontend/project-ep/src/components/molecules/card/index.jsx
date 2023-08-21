import React from "react";
import styles from './styles.module.scss';
// import ButtonUsage from "../atoms/botao";

const Card = (props) => {
    

    return (
        <div className={`${styles.card} ${props.className}`} onClick={props.onClick}>

            <div className={styles.info}>
                <h5>{props.modulo}</h5>

            </div>
            <div className={styles.info}>
                <h4>{props.nomeModulo}</h4>

            </div>

        </div>
    )
}

export default Card;