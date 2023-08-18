import React, { useState, useEffect } from "react";
import Navbar from "../../components/atoms/navbar.tsx";
import ButtonUsage from "../../components/atoms/botao.tsx";
// import {telaFundo} from "../components/";

const CadastraIniciativa = (props) => {

    const [problemaEnviado, setProblemaEnviado] = useState(false);

    return (
        <>
            <Navbar/>
            {problemaEnviado ? 
            <div>
                <h3>Nurinuri</h3>
                <button onClick={() => setProblemaEnviado(false)}>VOLTAR</button>
            </div>
            :
            <div >

                <h1>Enviar proposta de projeto</h1>
                <h6>Descrição do problema:</h6>
                <input type="text" />
                <ButtonUsage/>
                <button onClick={() => setProblemaEnviado(true)}>AVANÇAR</button>
            
            </div>
            }

            

        </>
    )
};

export default CadastraIniciativa;