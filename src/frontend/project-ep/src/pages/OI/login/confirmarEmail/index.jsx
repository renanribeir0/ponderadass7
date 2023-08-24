import styles from './styles.module.scss'; 
import Navbar from '../../../../components/atoms/navbar';

function ConfirmEmail() {
  return (
    <div className='topo2'>
      <Navbar/>
    <div className={styles.form}>
      <form className={styles.inputs}>
        <input className={styles.email} id='email' placeholder='Confirmar email...' type='email'></input>
        <br />
        <br />
        <button className={styles.botaocancelar}>Cancelar</button>

        
      </form>
    </div>
    </div>
   
  );
}

export default ConfirmEmail;
