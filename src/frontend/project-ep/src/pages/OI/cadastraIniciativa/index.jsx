import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import ButtonUsage from "../../../components/atoms/botao.tsx";
import Card from '../../../components/molecules/card/index.jsx'
import styles from '../cadastraIniciativa/styles.module.scss';
// import {telaFundo} from "../components/";

const CadastraIniciativa = (props) => {

    const [problemaEnviado, setProblemaEnviado] = useState(false);

    return (
        <>
            <Navbar/>
            {problemaEnviado ? 
            <div className={styles.principal2}>
                <div className={styles.paiCard}>
                    <Card />
                    <Card/>
                    <Card/>
                    <Card/>


                </div>
                
                <div className={styles.margem}>

                    <div className={styles.infoModulo}>
                        <strong>Problema:</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
                        <strong>Escopo da Solução:</strong>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.</p>
                        <div className={styles.tema}>

                            <strong>Tema:</strong>
                            <p>Fluxo de Caixa</p>
                        </div>
                        <div>
                            <strong>MVP</strong>
                            <ol>
                                <li>
                                    Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação
                                </li>
                                <li>
                                    Formulário de entrada de propostas de projetos;
                                </li>
                                <li>
                                    Dash de análise de Iniciativas / atribuição de ratings; 
                                </li>
                                <li>
                                    Dash de alocação de Projetos em  Módulos/Turmas;
                                </li>
                            </ol>
                        </div>

                    </div>


                </div>
                <div className={styles.botao}>
                    <ButtonUsage/>
                    <button onClick={() => setProblemaEnviado(false)}>VOLTAR</button>

                </div>
            </div>
            :
            <div className={styles.principal}>

                <div className={styles.formProposta}>
                    <h1>Enviar proposta de projeto</h1>
                    <h4>Descrição do problema:</h4>
                    <input type="text" />

                </div>

                <div className={styles.botao}>

                    <ButtonUsage/>
                    <button onClick={() => setProblemaEnviado(true)}>AVANÇAR</button>
                </div>

            
            </div>
            }

            

        </>
    )
};

export default CadastraIniciativa;