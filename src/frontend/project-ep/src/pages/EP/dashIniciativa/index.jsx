import styles from '../dashIniciativa/styles.module.scss';
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import Menu from "../../../components/atoms/menu/index.jsx";
import icon from '../../../assets/down-arrow.png'

const DashIniciativa = (props) => {

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
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
                                        <div className={styles.etapasCard}></div>
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
        </>
    )
}

export default DashIniciativa;