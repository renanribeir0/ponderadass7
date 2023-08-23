import styles from '../dashIniciativa/styles.module.scss';
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import Menu from "../../../components/atoms/menu/index.jsx"

const DashIniciativa = (props) => {

    return(
        <>
            <Navbar/>
            <div className={styles.body}>
                    <Menu/>
                    <div className={styles.bodyRight}>
                        <div className={styles.titulo}>
                            <div className={styles.tituloTexto}>
                                <h1>Análise de Iniciativas</h1>
                            </div>
                            <div className={styles.tituloModulo}>
                                <h3>M5 - ES</h3>
                            </div>
                        </div>
                        <div className={styles.etapas}>
                            <div className={styles.etapasCont}>
                                <div className={styles.etapasContBox} style={{ backgroundColor: '#E7E3F0' }}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Pré Iniciativa</h2>
                                    </div>
                                    <div className={styles.etapasContBoxBody}>
                                        <div className={styles.etapasBoxBodyCards}>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Iniciativa</h2>
                                    </div>
                                    <div className={styles.etapasContBoxBody}>
                                        <div className={styles.etapasBoxBodyCards}>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                            <div className={styles.etapasCard}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Negociação</h2>
                                    </div>
                                    <div className={styles.etapasContBoxBody}>
                                        <div className={styles.etapasBoxBodyCards}>
                                            <div className={styles.etapasCard}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Preparado</h2>
                                    </div>
                                    <div className={styles.etapasContBoxBody}>
                                        <div className={styles.etapasBoxBodyCards}>
                                            <div className={styles.etapasCard}></div>
                                        </div>
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