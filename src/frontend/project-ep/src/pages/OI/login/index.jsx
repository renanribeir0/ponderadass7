import styles from './styles.module.scss'; 
import Navbar from '../../../components/atoms/navbar';


function Login() {
  return (
    <div className='topo2'>
      <Navbar/>
    <div className={styles.form}>
      <form className={styles.inputs}>
        <input className={styles.email} id='email' placeholder='Email...' type='email'></input>
        <input className={styles.password} id='password' placeholder='Senha...' type='password'></input>
      </form>
      <a className={styles.campo_senha} href="">Esqueci minha senha</a>
    </div>
    </div>
   
  );
}

export default Login;
