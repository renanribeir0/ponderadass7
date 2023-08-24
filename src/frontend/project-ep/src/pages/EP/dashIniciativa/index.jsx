import styles from '../dashIniciativa/styles.module.scss';
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import Menu from "../../../components/atoms/menu/index.jsx";
import icon from '../../../assets/down-arrow.png'
import ModalSucesso from '../../../components/molecules/modalSucesso/index.jsx';

const DashIniciativa = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iniciativas, setIniciativas] = useState([]);


    useEffect(() => {
        // fetch('54.242.178.170:3001/iniciativas')
        fetch('localhost:3001/iniciativas')
        .then((response) => response.json())
        .then((data) => {
            setIniciativas(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    });


    return(
        <>
            <Navbar/>
            <div className={styles.body}>
                    <Menu/>
                    <div className={styles.bodyRight}>
                        <div className={styles.titulo}>
                            <h1>Análise de Iniciativas</h1>
                        </div>
                        
                        <div className={styles.etapas}>
                            <div className={styles.etapasHeader}>
                                <div className={styles.dropdown}>
                                    <button className={styles.dropdownButton}>
                                        Selecionar Modulo
                                        <img className={styles.arrow} src={icon}/>
                                    </button>
                                    <div class={styles.dropdownContent}>
                                        <a>Option 1</a>
                                        <a>Option 2</a>
                                        <a>Option 3</a>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.etapasModulo}>
                                <h1>M5 - ES</h1>
                            </div>
                            <div className={styles.etapasCont}>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Pré Iniciativa</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        {iniciativas.map((iniciativa, index) => (
                                            <div key={index} className={styles.etapasCard} iniciativa={iniciativa} onClick={openModal}>{iniciativa.turma}</div>

                                        ))}
                                    </div>
                                    
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Iniciativa</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Negociação</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard}></div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Preparado</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <ModalSucesso isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
        </>
    )
}

export default DashIniciativa;