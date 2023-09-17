import React, { useEffect, useState } from "react";
import styles from './styles.module.scss';
import fechar from '../../../assets/fechar.png'
import Button from '@mui/material/Button';
import ButtonUsage from "../../../components/atoms/botao.tsx";
import CardDash from "../cardsDashIniciativa/cardIniciativa/index";
import CardAlocaIniciativa from "../cardAlocaIniciativas";

let url = 'http://127.0.0.1:3001/'

const ModalAloca = (props) => {

    console.log(props.celula)

    const [modulo, setModulo] = useState({});
    const [selectedIniciativa, setSelectedIniciativa] = useState(null)
    const [forceRender, setForceRender] = useState(false)

    useEffect(() => {
        if(props.isOpen){

            console.log(props.celula)
            fetch(url+`modulos/${props.celula[1] + 6}`)
            .then((response) => response.json())
            .then((data) => {
                setModulo(data[0]);
                console.log("setei modulo")
                console.log(props.celula[1] + 6)
            })
            .catch((err) => {
              console.log(err.message);
            });
        }
        else {
            setModulo({})
        }

    }, [props.isOpen])

    useEffect(() => {
        // setForceRender(!forceRender)
        console.log("modulo")
        console.log(modulo)
    }, [modulo])

    if(props.isOpen){
    
        return (
            <div className={styles.modal_overlay}>
                <div className={styles.main}>

                <div className={styles.close} onClick={() => props.setIsModalOpen(false)}>
                    <img className={styles.fechar} src={fechar} />
                </div>

                <div className={styles.info}>
                    {props.iniciativasAAlocar.length > 0 ? 

                    <div className={styles.cards}>
                        {props.iniciativasAAlocar.map((iniciativa, index) => (
                            <CardAlocaIniciativa key={index} className={iniciativa == selectedIniciativa ? 'iniciativaSelected' : ''} iniciativa={iniciativa} onClick={() => {
                                console.log("iniciativa");
                                console.log(iniciativa)
                                setSelectedIniciativa(iniciativa);
                                console.log(iniciativa == selectedIniciativa)
                                console.log(selectedIniciativa)
                            }}/>
                        ))}
                    </div>
                    :
                    <div className={styles.naoHaProjetos}>
                        <p>Não há Projetos a serem Alocados!!</p>
                    </div>
                    }

                    <div className={styles.margem}>
                        <div className={styles.infoModulo}>
                            <div className={styles.info}>
                                <strong>Módulo: </strong>
                                {modulo ? 

                                <p>{modulo.nomeModulo}</p>
                                :
                                null
                                }

                            </div>
                            <div className={styles.info}>
                                <strong>Descrição: </strong>
                                {modulo ?

                                <p>{modulo.descricao}</p>
                                :
                                null
                                }

                            </div>
                            <div className={styles.competencia}>
                                <strong>Competências: </strong>
                                {/* {modulo.competencias.map((competencia, index) => (
                                    <p>{index+1}: {competencia}</p>
                                )
                                    
                                )} */}

                            </div>
                            
                        </div>

                    </div>

                </div>
                <div className={styles.botao}>
                    <ButtonUsage tipo={'aloca Iniciativa'} setIsModalOpen={props.setIsModalOpen} celula={props.celula} iniciativa={selectedIniciativa} alocaIniciativa={props.alocaIniciativa}  conteudo={"ALOCAR"}/>
                </div>
                </div>
                
            </div>
        )
    }
    else {
        return null
    }
}

export default ModalAloca;