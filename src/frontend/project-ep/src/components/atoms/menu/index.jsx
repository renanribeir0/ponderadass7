import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/logo3.png';

const Menu = (props) => {
    return (
      <>
        <div className={styles.menu}>
          <aside className={styles.conteudo}>
            <a>
              <img className={styles.logo} src={logo}/>
            </a>
          </aside>
        </div>
      </>
    );
  
}
  
export default Menu;