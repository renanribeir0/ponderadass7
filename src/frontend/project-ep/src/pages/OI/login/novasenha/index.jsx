import React from "react";
import styles from "./styles.module.scss";
import Navbar from "../../../../components/atoms/navbar";

function NovaSenha() {
  return (
    <>
      <Navbar />
        <div className={styles.formGeral}>
          <form className={styles.inputs}>
            <input
              className={styles.novasenha}
              id="password"
              placeholder="Nova senha..."
              type="Nova senha..."
            ></input>
            <input
              className={styles.confirmarnovasneha}
              id="password"
              placeholder="Confirmar nova senha..."
              type="password"
            ></input>
          </form>
          <button className={styles.botaoconfirmar}>Confirmar</button>
        </div>
    </>
  );
}

export default NovaSenha();
