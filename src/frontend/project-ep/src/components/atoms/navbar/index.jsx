import React from 'react';
import styles from './styles.module.scss';
import logo from '../../../assets/logo3.png';

const Navbar = (props) => {
  return (
    <>
      <div className={styles.navbar}>
        <img className={styles.imagens} src={logo}/>
      </div>
    </>
  );

}

export default Navbar;

