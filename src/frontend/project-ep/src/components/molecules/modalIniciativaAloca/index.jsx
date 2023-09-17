import React from "react";
import styles from './styles.module.scss';
import fechar from '../../../assets/fechar.png'
import Button from '@mui/material/Button';

import ButtonUsage from "../../atoms/botao";

const ModalIniciativa = (props) => {

    if(props.isOpen){
    
        return (
            <div className={styles.modal_overlay}>
                <div className={styles.main}>

                <div className={styles.close} onClick={() => props.setIsModalOpen(false)}>
                    <img className={styles.fechar} src={fechar} />
                </div>

                    

                    
                </div>
                
            </div>
        )
    }
    else {
        return null
    }
}

export default ModalIniciativa;