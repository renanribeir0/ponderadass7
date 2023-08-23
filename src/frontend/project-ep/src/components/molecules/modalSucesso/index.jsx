import React from "react";
import styles from './styles.module.scss';
import sucessoIcone from   '../../../assets/sucessoIcone.png'
import Button from '@mui/material/Button';

// import ButtonUsage from "../atoms/botao";

const ModalSucesso = (props) => {

    if(props.isOpen){
    

        return (
            <div className={styles.modal_overlay}>
                <div className={styles.main}>

                    <div className={styles.icone}>
                        <img src={sucessoIcone} alt="" />
                    </div>

                    <div className={styles.titulo}>
                        <h1>Sucesso</h1>

                    </div>

                    <div className={styles.mensagem}>
                        <p>Iniciativa cadastrada com Sucesso</p>

                    </div>

                    <div className={styles.paiBotao}>
                        <Button className={styles.botao} onClick={() => props.setIsModalOpen(false)} size="large">OK</Button>

                    </div>

                </div>

            </div>
        )
    }
    else {
        return null
    }
}

export default ModalSucesso;