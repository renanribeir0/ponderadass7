import React from "react";
import styles from './styles.module.scss';
import fechar from '../../../assets/fechar.png'
import Button from '@mui/material/Button';
import CardDash from "../cardsDashIniciativa/cardIniciativa";

const Modal = (props) => {

    if(props.isOpen){
    
        return (
            <div className={styles.modal_overlay}>
                <div className={styles.main}>

                <div className={styles.close} onClick={() => props.setIsModalOpen(false)}>
                    <img className={styles.fechar} src={fechar} />
                </div>

                <div className={styles.info}>
                    <div className={styles.cards}>
                        {props.iniciativasAAlocar.map((iniciativa, index) => (
                            <CardDash key={index} iniciativa={iniciativa} onClick={() => {
                                props.setSelectedCard(iniciativa);
                            }}/>
                        ))}
                    </div>

                    <div className={styles.margem}>
                        <div className={styles.infoModulo}>
                            <div>
                                <strong>Módulo: </strong>
                                <p>{props.iniciativa.nomeModulo}</p>

                            </div>
                            <div>
                                <strong>Descrição</strong>
                                <p>{props.iniciativa.descricao}</p>

                            </div>
                            {props.iniciativa.competencias.map((competencia, index) => (
                                <p>{competencia}</p>
                            )
                                
                            )}
                            
                        </div>

                    </div>

                </div>
                </div>
                
            </div>
        )
    }
    else {
        return null
    }
}

export default Modal;