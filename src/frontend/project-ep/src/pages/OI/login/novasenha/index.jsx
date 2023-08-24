import styles from './styles.module.scss'; 
import Navbar from '../../../../components/atoms/navbar';


function Novasenha() {
  return (
    <div className='topo2'>
      <Navbar/>
    <div className={styles.form}>
      <form className={styles.inputs}>
        <input className={styles.novasenha} id='password' placeholder='Nova senha...' type='Nova senha...'></input>
        <input className={styles.confirmarnovasneha} id='password' placeholder='Confirmar nova senha...' type='password'></input>
      </form>
      <button className={styles.botaoconfirmar}>Confirmar</button>
    </div>
    </div>
   
  );
}

export default Novasenha;
