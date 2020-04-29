import React from "react";
import styles from './Header.module.css';
import image from './images/image.png';

function Header() {
  return (
    <header className={styles.MAIN_NAV}>
      <h1>
      <img className={styles.image} src={image} alt="COVID-19" /> 
        
      </h1>
    </header>
  );
}

export default Header;