import React from "react";
import styles from './styles.module.scss';
import EsIcone from '../../../assets/esIcone.svg'
import EcIcone from '../../../assets/ecIcone.svg'
import CcIcone from '../../../assets/ccIcone.svg'
import SiIcone from '../../../assets/siIcone.svg'
import Ferramenta from '../../../assets/ferramenta.svg'

const Card = (props) => {

    let icone = CcIcone
    if(props.icone == 'es'){
        icone = EsIcone;
    }
    else if (props.icone == 'cc') {
        icone = CcIcone;
    }
    else if (props.icone == 'ec') {
        icone = EcIcone;
    }
    else if (props.icone == 'si') {
        icone = SiIcone;
    }

    return (
        <div className={`${styles.card} ${props.className}`} onClick={props.onClick}>

            <div className={styles.info1}>
                <img className={styles.iconeCurso} src={icone} alt="" />
                <p>{props.modulo}</p>

            </div>
            <div className={styles.info}>
                <img className={styles.iconeFerramenta} src={Ferramenta} alt=""/>
                <p>{props.nomeModulo}</p>

            </div>

        </div>
    )
}

export default Card;