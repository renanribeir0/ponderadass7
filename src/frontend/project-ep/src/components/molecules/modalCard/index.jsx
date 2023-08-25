import React from "react";
import styles from './styles.module.scss';
import fechar from '../../../assets/fechar.png'
import Button from '@mui/material/Button';

// import ButtonUsage from "../atoms/botao";

const ModalCard = (props) => {

    if(props.isOpen){
    
        return (
            <div className={styles.modal_overlay}>
                <div className={styles.main}>

                    <div className={styles.header}>
                        <div className={styles.close}>
                            <img className={styles.fechar} src={fechar}/>
                        </div>
                        <div className={styles.parceiro}>
                            <h1>{props.iniciativa.parceiro}</h1>
                        </div>
                        <div className={styles.modulo}>
                            <h2>Modulo {props.iniciativa.modulo} - {props.iniciativa.curso}</h2>
                        </div>
                    </div>

                    <div className={styles.body}>
                        <div className={styles.bodyTop}>
                            <div className={styles.data}>
                                <div className={styles.dataInicio}>
                                    <h4>Data Inicio:</h4>
                                    <p>03/08/2022</p>
                                </div>
                                <div className={styles.dataFim}>
                                    <h4>Data Fim:</h4>
                                    <p>17/10/2022</p>
                                </div>
                            </div>
                            <div className={styles.turma}>
                                <h4>Turma:</h4>
                                <p>{props.iniciativa.turma}</p>
                            </div>
                        </div>
                        <div className={styles.bodyBottom}>
                            <div className={styles.descricao}>
                                <h2>Descrição do Problema</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className={styles.escopo}>
                                <h2>Escopo da Solução</h2>
                                <p>{props.iniciativa.escopo}</p>
                            </div>
                            <div className={styles.mvp}>
                                <h2>MVP</h2>
                                <p>- {props.iniciativa.mvp[0]}</p><p>- {props.iniciativa.mvp[1]}</p><p>- {props.iniciativa.mvp[2]}</p><p>- {props.iniciativa.mvp[3]}</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <div className={styles.paiBotao}>
                            <Button className={styles.botao} onClick={() => props.setIsModalOpen(false)} size="large">Fechar</Button>
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

export default ModalCard;