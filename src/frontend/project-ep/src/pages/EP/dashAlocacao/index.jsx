import React from "react";
import Tabela from "../../../components/molecules/TabelaAloca";
import Navbar from "../../../components/atoms/navbar";
import styles from './styles.module.scss'


const DashAlocacao = (props) => {
    return (
        <>
            <Navbar></Navbar>
            <div className={styles.main}>
                <div className={styles.tabela}>

                    <Tabela></Tabela>
                </div>

            </div>
        </>

    )
}

export default DashAlocacao;
