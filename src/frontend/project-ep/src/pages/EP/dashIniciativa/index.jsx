import styles from '../dashIniciativa/styles.module.scss';
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import Menu from "../../../components/atoms/menu/index.jsx";
import icon from '../../../assets/down-arrow.png'
import ModalCard from '../../../components/molecules/modalCard/index.jsx';
import CardDash from '../../../components/molecules/cardDash/index.jsx';


const DashIniciativa = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iniciativas, setIniciativas] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null); // Estado para armazenar o Card selecionado
    const [cardIndex, setCardIndex] = useState(null);


    useEffect(() => {
        // fetch('54.242.178.170:3001/iniciativas')
        fetch('http://127.0.0.1:3001/iniciativas')
        .then((response) => response.json())
        .then((data) => {
            setIniciativas(data)
            console.log(data)
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
                                        <h6>Selecionar Modulo</h6>
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
                                            <CardDash key={index} iniciativa={iniciativa} onClick={() => {
                                                setSelectedCard(iniciativa);
                                                setIsModalOpen(true);
                                                setCardIndex(index);
                                            }}/>
                                        ))}

                                    </div>
                                    
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Iniciativa</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Negociação</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                    </div>
                                </div>
                                <div className={styles.etapasContBox}>
                                    <div className={styles.etapasContBoxTitle}>
                                        <h2>Preparado</h2>
                                    </div>
                                    <div className={styles.etapasBoxBodyCards}>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                        <div className={styles.etapasCard} onClick={() => setIsModalOpen(true)}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {/* {selectedCard && (
                <ModalCard isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            )} */}

            {/* {selectedCard && (
                <ModalCard isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                // {selectedCard.map((item, index) => (
                //     <ModalCard key={index} iniciativa={item} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                // ))}
            )} */}

            <ModalCard key={cardIndex} iniciativa={selectedCard} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            
        </>
    )
}

export default DashIniciativa;