import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import ButtonUsage from "../../../components/atoms/botao.tsx";
import Card from '../../../components/molecules/card/index.jsx'
import styles from '../cadastraIniciativa/styles.module.scss';
// import {telaFundo} from "../components/";
import TextField from '@mui/material/TextField';
import desenho from '../../../assets/desenho.png'

// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);


const CadastraIniciativa = (props) => {

    const [problemaEnviado, setProblemaEnviado] = useState(false);
    const [descricao, setDescricao] = useState("");  // Novo estado para armazenar a descrição
    const [selectedCard, setSelectedCard] = useState(null); // Estado para armazenar o Card selecionado
    const [apiResponse, setApiResponse] = useState([]); // Simulação da resposta da API

    // Função para lidar com a mudança no TextField
    const handleDescricaoChange = (event) => {
        console.log(event.target.value)
        setDescricao(event.target.value);
        console.log(process.env.OPENAI_API_KEY)
    };

    const fetchOpenAIResponse = async (problemDescription) => {
        try {
            const response = await fetch('http://127.0.0.1:3000/openai',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: problemDescription })
            }
            );

            const data = await response.json();

            // Processar a resposta aqui, por exemplo:
            console.log("AGORA A RESPOSTA DO ENDPOINT ")
            console.log(data)
            setApiResponse(data.choices[0].message.content);
            console.log(apiResponse);
            
        } catch (error) {
            console.error("Erro ao acessar a API do OpenAI:", error);
        }
    };

    useEffect(() => {
        if (problemaEnviado) {

            console.log("VAI CHAMAR FETCHOPENAIRESPONSE");
            // fetchOpenAIResponse(descricao)
            // Simulação de uma resposta da API
            setApiResponse([
                { id: 1, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 1", tema: "Fluxo de Caixa", mvp: ["Item 1", "Item 2"] },
                { id: 2, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 2", tema: "RH - Gestão de Pessoas", mvp: ["Item 3", "Item 4"]  },
                { id: 3, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 3", tema: "Gestão de Projetos", mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"] },
                { id: 4, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 4", tema: "Gestão de Projetos", mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"] },
                { id: 5, problema: "O projeto visa atuar em dois problemas: a escassez de mão de obra nos canteiros, algo que é relatado por todo setor da construção civil; e a contratação manual e lenta de empreiteiros devido a todas as particularidades de uma empresa que atua em todo o território nacional.", solucao: "A proposta é a criação de uma plataforma self-service de captação e contratação de empreiteiros e profissionais autônomos, conectando a demanda de obra (MRV) com as ofertas de prestadores de serviço.", tema: "Gestão de Pessoas", mvp: ["Aplicação web capaz de disponibilizar as oportunidades de trabalho para os prestadores de serviço (com as informações de prazo, preço e disponibilidade)", "criar uma base de dados com contatos de todos os empreiteiros que se interessarem pela vaga integrada à referida aplicação."] }        
            ])
        }
    }, [problemaEnviado]);

    return (
        <>
            <Navbar/>
            {problemaEnviado ? 
            <div className={styles.principal2}>
                <div className={styles.paiCard}>
                    {apiResponse.map((cardData, index) => (
                        <Card key={index} onClick={() => setSelectedCard(cardData)}/>

                    ))}


                </div>
                
                <div className={styles.margem}>

                    {selectedCard && (

                        <div className={styles.infoModulo}>
                            <strong className={styles.titulo}>Problema:</strong>
                            <p>{selectedCard.problema}</p>
                            <strong className={styles.titulo}>Escopo da Solução:</strong>
                            <p>{selectedCard.solucao}</p>
                            <div className={styles.tema}>

                                <strong className={styles.titulo}>Tema:</strong>
                                <p>{selectedCard.tema}</p>
                            </div>
                            <div>
                                <strong className={styles.titulo}>MVP</strong>
                                <ol>

                                    {selectedCard.mvp.map((item, index) => (
                                        <li key={index}>
                                            {item}
                                        </li>

                                    ))}
                                </ol>
                            </div>

                        </div>
                    )}



                </div>
                <div className={styles.botao}>
                    <button onClick={() => fetchOpenAIResponse(descricao)}>BOTÂO PARA ACESSAR A API DO GEPETAS</button>
                    <ButtonUsage problemaEnviado={problemaEnviado} setProblemaEnviado={setProblemaEnviado}/>

                </div>
            </div>
            :
            <div className={styles.principal}>
                <div className={styles.header}>
                    <div className={styles.instrucoes}>
                        <h2>
                            Quer mais um <br></br>
                            projeto com o Inteli?
                        </h2>
                        <h5>
                            Detalhe a iniciativa a ser resolvida seguindo o modelo:
                        </h5>
                        <p>
                            
                            Contexto - Dor -  Valor agregado
                        </p>
                    </div>

                        <img className={styles.imagem} src={desenho} alt="" />
                </div>

                <div className={styles.tituloPagina}>
                    <h3>Enviar proposta de projeto</h3>

                </div>

                <div className={styles.formProposta}>

                    <div className={styles.inputProblema}>
                        <h4>Descrição do problema:</h4>
                        
                        <TextField className={styles.TextField}
                        required
                        id="outlined-required"
                        label="Descrição"
                        value={descricao}
                        onChange={handleDescricaoChange}
                        defaultValue=" "
                        />
                        {/* <input type="text" /> */}

                    </div>

                    <div className={styles.botao}>

                        <ButtonUsage disabled={!descricao.trim()} problemaEnviado={problemaEnviado} setProblemaEnviado={setProblemaEnviado}/>
                    </div>
                 

                </div>


            
            </div>
            }

            

        </>
    )
};

export default CadastraIniciativa;