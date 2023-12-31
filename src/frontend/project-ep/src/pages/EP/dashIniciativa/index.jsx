import styles from '../dashIniciativa/styles.module.scss';
import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import NavbarEP from "../../../components/atoms/navbar-ep/index.jsx"
import Menu from "../../../components/atoms/menu/index.jsx";
import icon from '../../../assets/down-arrow.png'
import ModalCard from '../../../components/molecules/modalCard/index.jsx';
import CardDash from '../../../components/molecules/cardsDashIniciativa/cardIniciativa/index.jsx';

const url = 'http://127.0.0.1:3001/'


const DashIniciativa = (props) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [iniciativas, setIniciativas] = useState([]);
    const [modulos, setModulos] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null); // Estado para armazenar o Card selecionado
    const [cardIndex, setCardIndex] = useState(null);

    const handleEdit = async (iniciativa, status) => {
        try {
          console.log(iniciativa)
          iniciativa.status = status 
          console.log(iniciativa)
          console.log(iniciativa.id)
          const response = await fetch(`http://127.0.0.1:3001/iniciativas/${iniciativa.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            // body: JSON.stringify({ iniciativa: iniciativa }),
            body: JSON.stringify(iniciativa),

          });
    
          if (!response.ok) {
            throw new Error('Erro na requisição');
          }
    
        //   const responseData = await response.json();
    
          // Atualize o estado com os novos dados retornados pela API
        //   setData(prevData => prevData.map(item => item.id === id ? responseData : item));
        } catch (error) {
          console.error('Erro ao atualizar o status:', error);
        }
    }


    useEffect(() => {
        // fetch('54.242.178.170:3001/iniciativas')
        // fetch('http://34.234.67.1:3001/iniciativas')
        fetch(url+'iniciativas')
        .then((response) => response.json())
        .then((data) => {
            setIniciativas(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, []);

    useEffect(() => {
        // fetch('54.242.178.170:3001/iniciativas')
        // fetch('http://34.234.67.1:3001/iniciativas')
        fetch(url+'modulos')
        .then((response) => response.json())
        .then((data) => {
            setModulos(data)
            console.log(data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, []);




    return(
        <>
            
            <div className={styles.body}>
                    <NavbarEP/>
                    <div className={styles.bodyRight}>
                        <div className={styles.gapTop}></div>
                        <div>
                            <div className={styles.titulo}>
                                <div className={styles.tituloLeft}>
                                    <h2 className={styles.tituloMain}>Analise de Iniciativas</h2>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.etapas}>
                            <div className={styles.etapasHeader}>
                                <div className={styles.dropdown}>
                                    <button className={styles.dropdownButton} >
                                        {/* <h6>Selecionar Modulo</h6> */}
                                        Selecionar Módulo
                                        <img className={styles.arrow} src={icon}/>
                                    </button>
                                    <div class={styles.dropdownContent}>
                                        {/* <a>ES</a>
                                        <a>EC</a>
                                        <a>CC</a>
                                        <a>SI</a> */}
                                        {modulos.map((modulo, index) => (
                                            <a key={index} modulo={modulo}>
                                                {modulo.nomeModulo}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.etapasBody}>
                                <h2 className={styles.etapasModulo}>M5 - ES</h2>
                            
                                <div className={styles.etapasCont}>

                                    <div className={styles.etapasContBox}>
                                        <div className={styles.boxCol}>
                                            <div className={styles.colCont}>
                                                <div className={styles.colTitle}>
                                                    <h6 className={styles.colTitleText}>Análise</h6>
                                                </div>
                                                {iniciativas.map((iniciativa, index) => {
                                                    console.log("iniciativa dentro do map")
                                                    console.log(iniciativa)
                                                    if(iniciativa.status == "Analise"){

                                                        return (
                                                        <CardDash key={index} iniciativa={iniciativa} onClick={() => {
                                                            setSelectedCard(iniciativa);
                                                            setIsModalOpen(true);
                                                            setCardIndex(index);
                                                        }}/>)
                                                    }
                                                    else {
                                                        return null
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.etapasContBox}>
                                        <div className={styles.boxCol}>
                                            <div className={styles.colCont}>
                                                <div className={styles.colTitle}>
                                                    <h6 className={styles.colTitleText}>Negociação</h6>
                                                </div>
                                                {iniciativas.map((iniciativa, index) => {
                                                    if(iniciativa.status == "Negociacao"){
                                                        return (
                                                            <CardDash key={index} iniciativa={iniciativa} onClick={() => {
                                                                setSelectedCard(iniciativa);
                                                                setIsModalOpen(true);
                                                                setCardIndex(index);
                                                            }}/>

                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.etapasContBox}>
                                        <div className={styles.boxCol}>
                                            <div className={styles.colCont}>
                                                <div className={styles.colTitle}>
                                                    <h6 className={styles.colTitleText}>Preparado</h6>
                                                </div>
                                                {iniciativas.map((iniciativa, index) => {
                                                    if(iniciativa.status == "Preparado"){
                                                        return (
                                                            <CardDash key={index} iniciativa={iniciativa} onClick={() => {
                                                                setSelectedCard(iniciativa);
                                                                setIsModalOpen(true);
                                                                setCardIndex(index);
                                                            }}/>

                                                        )
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
            </div>
            <Menu/>
            {/* {selectedCard && (
                <ModalCard isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            )} */}

            {/* {selectedCard && (
                <ModalCard isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                // {selectedCard.map((item, index) => (
                //     <ModalCard key={index} iniciativa={item} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
                // ))}
            )} */}

            <ModalCard key={cardIndex} handleEdit={handleEdit} iniciativa={selectedCard} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
            
        </>
    )
}

export default DashIniciativa;