import React, { useState, useEffect } from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import ButtonUsage from "../../../components/atoms/botao.tsx";
import Card from '../../../components/molecules/card/index.jsx'
import styles from '../cadastraIniciativa/styles.module.scss';
import ModalSucesso from "../../../components/molecules/modalSucesso/index.jsx";
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
    const [isModalOpen, setIsModalOpen] = useState(false); //Controla Modal
    const [nomeModulo, setNomeModulo] = useState('')
    const [modulos, setModulos] = useState([])
    const [arrayIniciativas, setArrayIniciativas] = useState([]);

    // let arrayIniciativas = []

    // Função para lidar com a mudança no TextField
    const handleDescricaoChange = (event) => {
        console.log(event.target.value)
        setDescricao(event.target.value);
        console.log(process.env.OPENAI_API_KEY)
    };

    const classificaModulo = async (problemDescription, modulo) => {
        try {
            const response = await fetch('http://127.0.0.1:3001/openai',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: problemDescription, modulo: modulo })
            }
            );
            

            const data = await response.json();

            console.log("data.text")
            console.log(data.text)

            const objetoIniciativa = JSON.parse(data.text);
            console.log("objetoIniciativa")
            console.log(objetoIniciativa)
            console.log("data.text.Ferramenta_Tecnologica")
            console.log(objetoIniciativa.Ferramenta_Tecnologica)

            if(objetoIniciativa.Ferramenta_Tecnologica === "Muito Alta" || objetoIniciativa.Ferramenta_Tecnologica === "Perfeita") {
                console.log("AGORA A RESPOSTA DO ENDPOINT ")
                console.log(objetoIniciativa)
                let iniciativa = {
                    id: 2,
                    problema: descricao,
                    solucao: "Descrição de solução Mockada",
                    tema: "Tema do problema informado",
                    curso: "es",
                    nomeModulo: modulo.nomeModulo,
                    descricao: modulo.descricao,
                    mvp: ["MVP1 - Mockado", "MVP2 - Mockado", "MVP3 - Mockado"]
                }

                return iniciativa
                // setApiResponse(prevState => [...prevState, iniciativa]);
                // arrayIniciativas.push(iniciativa)
                // setApiResponse(data.text);
                // console.log(arrayIniciativas);
            }
            return null
            // Processar a resposta aqui, por exemplo:
            
        } catch (error) {
            console.error("Erro ao acessar a API do OpenAI:", error);
            return null
        }
    };

    const iteraModulos = async (problemDescription) => {

        let tempIniciativas = [];

        for (const modulo of modulos) {

            console.log("modulo")
            console.log(modulo)
            const iniciativa = await classificaModulo(problemDescription, modulo)
            if (iniciativa) {
                tempIniciativas.push(iniciativa);
            }
        }
        
        
        // setApiResponse(tempIniciativas);
        setApiResponse([
            {
                id: 2,
                problema: descricao,
                solucao: "Automatizar o processo de contratação, garantindo acessibilidade para todos os prestadores de serviço em seus locais de origem. Criar um ambiente de fácil acesso com disponibilização de oportunidades de trabalho para prestadores de serviços locais.",
                tema: "Gestão Operacional",
                curso: "cb",
                nomeModulo: "Módulo 02 - Ciclo Básico",
                descricao: "Desenvolvimento de uma Plataforma Web",
                mvp: ["Aplicação web capaz de disponibilizar as oportunidades de trabalho para os prestadores de serviço (com as informações de prazo, preço e disponibilidade), assim como criar uma base de dados com contatos de todos os empreiteiros que se interessarem pela vaga integrada à referida aplicação."]
            },
            {
                id: 2,
                problema: descricao,
                solucao: "Criação de modelos preditivos a partir de coortes de pacientes acompanhadas em projetos de pesquisa do Instituto do Câncer do Estado de São Paulo/Faculdade de Medicina da Universidade de São Paulo.",
                tema: "Saúde",
                curso: "cb",
                nomeModulo: "Módulo 03 - Ciclo Básico",
                descricao: "Construção de lógica para predição com inteligência artificial",
                mvp: [
                    "Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação",
                    "Formulário de entrada de propostas de projetos",
                    "Dash de análise de Iniciativas / atribuição de ratings",
                    "Dash de alocação de Projetos em  Módulos/Turmas"
                ]
            }
        ])

        // console.log("arrayIniciativas")
        console.log("tempIniciativas")
        console.log(tempIniciativas)
        
    }

    useEffect(() => {
        if (problemaEnviado) {

            console.log("VAI CHAMAR FETCHOPENAIRESPONSE");
            iteraModulos(descricao)
            // fetchOpenAIResponse(descricao)
            // Simulação de uma resposta da API
            // setApiResponse([
            //     { id: 1, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", curso: "es", modulo: "Módulo 05 - Engenharia de Software", nomeModulo: "Desenvolvimento de plataforma em Cloud", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 1", tema: "Fluxo de Caixa", mvp: ["Item 1", "Item 2"] },
            //     { id: 2, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", curso: "cb", modulo: "Módulo 02 - Ciclo Básico", nomeModulo: "Desenvolvimento de plataforma Web", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 2", tema: "RH - Gestão de Pessoas", mvp: ["Item 3", "Item 4"]  },
            //     { id: 3, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", curso: "si", modulo: "Módulo 08 - Sistemas de Informação", nomeModulo: "Integração, gerenciamento e análise de big data",solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 3", tema: "Gestão de Projetos", mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"] },
            //     { id: 4, problema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa.", curso: "es", modulo: "Módulo 06 - Engenharia de Software", nomeModulo: "Elaboração de aplicação para dispositivos móveis", solucao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. 4", tema: "Gestão de Projetos", mvp: ["Cadastro de módulos / contexto do Metaprojeto e o cronograma de operação", "Formulário de entrada de propostas de projetos", "Dash de análise de Iniciativas / atribuição de ratings", "Dash de alocação de Projetos em  Módulos/Turmas"] },
            //     // { id: 5, problema: "O projeto visa atuar em dois problemas: a escassez de mão de obra nos canteiros, algo que é relatado por todo setor da construção civil; e a contratação manual e lenta de empreiteiros devido a todas as particularidades de uma empresa que atua em todo o território nacional.", solucao: "A proposta é a criação de uma plataforma self-service de captação e contratação de empreiteiros e profissionais autônomos, conectando a demanda de obra (MRV) com as ofertas de prestadores de serviço.", tema: "Gestão de Pessoas", mvp: ["Aplicação web capaz de disponibilizar as oportunidades de trabalho para os prestadores de serviço (com as informações de prazo, preço e disponibilidade)", "criar uma base de dados com contatos de todos os empreiteiros que se interessarem pela vaga integrada à referida aplicação."] }        
            // ])
        }
    }, [problemaEnviado]);

    useEffect(() => {
        fetch('http://127.0.0.1:3001/modulos')
        .then((response) => response.json())
        .then((data) => {
            setModulos(data)
            console.log("Modulos")
            console.log(modulos)
        })
        .catch((err) => {
            console.log(err.message)
        })

        // const samuboy = [{
        //     Ferramenta_Tecnologica: "Perfeita",
        //     problema: descricao,
        //     solucao: "Descrição de solução Mockada",
        //     tema: "Tema do problema informado",
        //     curso: "es",
        //     modulo: "Modulo 02 - Ciclo Básico",
        //     nomeModulo: "Desenvolvimento de plataforma web",
        //     mvp: ["MVP1 - Mockado", "MVP2 - Mockado", "MVP3 - Mockado"],
        //     Gestão_de_Projetos: "Alta",
        //     Metodologia_Científica: "Muito Alta",
        //     Organização_de_Dados: "Muito Alta",
        //     Planejamento_de_Experimentos: "Muito Alta",
        //     Programação_de_Computadores: "Alta"
        // },
        // {
        //     Ferramenta_Tecnologica: "Perfeita",
        //     problema: descricao,
        //     solucao: "Descrição de solução Mockada",
        //     tema: "Tema do problema informado",
        //     curso: "es",
        //     modulo: "nhaaa",
        //     nomeModulo: "Módulo Samuboy",
        //     mvp: ["MVP1 - Samuboy", "Samu", "boy"],
        //     Gestão_de_Projetos: "Alta",
        //     Metodologia_Científica: "Muito Alta",
        //     Organização_de_Dados: "Muito Alta",
        //     Planejamento_de_Experimentos: "Muito Alta",
        //     Programação_de_Computadores: "Alta"
        // }]

        
        // setModulos(samuboy)


    }, [])
    
    return (
        <>
            <Navbar/>
            <ModalSucesso mensagem={nomeModulo} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            {problemaEnviado ? 
            <div className={styles.principal2}>
                <div className={styles.paiCard}>
                    {apiResponse.map((cardData, index) => (
                        <Card key={index} icone={cardData.curso} modulo={cardData.nomeModulo} nomeModulo={cardData.descricao} className={cardData === selectedCard ? styles.cardSelected : ''} onClick={() => setSelectedCard(cardData)}/>

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

                                <strong className={styles.tituloTema}>Tema:</strong>
                                <p>     {selectedCard.tema}</p>
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
                    {/* <button onClick={() => iteraModulos(descricao)}>BOTÂO PARA ACESSAR A API DO GEPETAS</button> */}
                    <ButtonUsage tipo="envia Iniciativa" conteudo="CONFIRMAR" setNomeModulo={setNomeModulo} setIsModalOpen={setIsModalOpen} enviaIniciativa={true} selectedCard={selectedCard} problemaEnviado={problemaEnviado} setProblemaEnviado={setProblemaEnviado}/>

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
                        
                        <TextField multiline maxRows={Infinity} className={styles.TextField}
                        
                        id="outlined-required"
                        // label="Descrição"
                        value={descricao}
                        onChange={handleDescricaoChange}
                        defaultValue=" "
                        />
                        {/* <input type="text" /> */}

                    </div>

                    <div className={styles.botao}>

                        <ButtonUsage tipo="envia Problema" conteudo="CONFIRMAR" descricao={descricao} iteraModulos={iteraModulos} enviaIniciativa={false} disabled={!descricao.trim()} problemaEnviado={problemaEnviado} setProblemaEnviado={setProblemaEnviado}/>
                    </div>
                 

                </div>


            
            </div>
            }

            

        </>
    )
};

export default CadastraIniciativa;