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
                        <div className={styles.close} onClick={() => props.setIsModalOpen(false)}>
                            <img className={styles.fechar} src={fechar} />
                        </div>
                        <div className={styles.parceiro}>
                            <h1>{props.iniciativa.parceiro}</h1>
                        </div>
                        <div className={styles.parceiroCNPJ}>
                            <h2><strong>CNPJ: </strong>7457348752385734</h2>
                        </div>
                    </div>

                    <div className={styles.parceiroInfo}></div>

                    <div className={styles.caixaContato}>
                        <div className={styles.contatoTitulo}>
                            <h2><strong>Contato:</strong></h2>
                        </div>
                        <div className={styles.contatoInfo}>
                            <div className={styles.contatoBody}>
                                <h3><strong>Nome: </strong>Mauricio Trapnell Felicissimo</h3>
                                <h3><strong>Cargo: </strong>Vice presidente da empresa</h3>
                            </div>
                            <div className={styles.contatoBody}>
                                <h3><strong>Email: </strong>maufelicissimo@gmail.com</h3>
                                <h3><strong>Telefone: </strong>+55 (11) 95655-1907</h3>
                            </div>
                        </div>
                    </div>

                    <div className={styles.infoIniciativa}>
                        <div className={styles.infoDesc}>
                            <h2>Descrição do Problema:</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div className={styles.infoModulo}>
                            <h2><strong>Modulo: </strong>M05 - Engenharia de Software</h2>
                        </div>
                        <div className={styles.infoTAPI}>
                            <div className={styles.escopo}>
                                <h2>Escopo:</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                            <div className={styles.infoMVP}>
                                <h2>MVP:</h2>
                                <p>gfcvgtfgvhyghyghgyhbgyhb</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.escolhaModulo}>
                        <div className={styles.escolhaBotao}>
                                    <button className={styles.moduloButton} >
                                        Selecionar Modulo
                                    </button>
                                    <div class={styles.moduloContent}>
                                        <a>ES</a>
                                        <a>EC</a>
                                        <a>CC</a>
                                        <a>SI</a>
                                    </div>
                        </div>
                        <div className={styles.escolhaModuloName}>
                            <h2>M05 - Engenharia de Software</h2>
                        </div>
                    </div>


                    {/* <div className={styles.body}>
                        <div className={styles.bodyTop}>
                            <div className={styles.turma}>
                                <h4>Turma:</h4>
                                <p>{props.iniciativa.turma}</p>
                            </div>
                            <div className={styles.statusDiv}>
                                <div className={styles.status}>
                                    <h5>Pre Analise</h5>
                                </div>

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
                    </div> */}

                    <div className={styles.footer}>
                        <div className={styles.paiBotao}>
                            <Button className={styles.botaoRejeitar} size="large">Rejeitar</Button>
                        </div>
                        <div className={styles.paiBotao}>
                            <Button className={styles.botaoAceitar} size="large">Aceitar</Button>
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