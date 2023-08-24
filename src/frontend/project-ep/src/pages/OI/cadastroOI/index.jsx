import React from "react";
import Navbar from "../../../components/atoms/navbar/index.jsx";
import ButtonUsage from "../../../components/atoms/botao.tsx";
import Card from '../../../components/molecules/card/index.jsx'
import TextField from '@mui/material/TextField';
import desenho from '../../../assets/desenho.png';
import style from './style.module.scss';
import styles from '../cadastraIniciativa/styles.module.scss';

export const Cadastro = (props) => {
    
    // const [problemaEnviado, setProblemaEnviado] = useState(false);
    // const [] = useState(true);
    // //Crair as varias para preenchimento: Nome, CNPJ, telefone, email, etc
    // const [descricao, setDescricao] = useState("");  // Novo estado para armazenar a descrição
    // const [selectedCard, setSelectedCard] = useState(null); // Estado para armazenar o Card selecionado

 return (
    <>
        <div className={style.cadastroGeral}>
            <div className={styles.header}>
            <Navbar/>
            </div>
            <div className={styles.botao}>
                 <ButtonUsage/>
            </div>
                 
        </div>
    </>
    )
}