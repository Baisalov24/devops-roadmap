import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Tima</div>

      <nav className={styles.nav}>
        <Link to="/"><button className={styles.navButton}>Home</button></Link>
        <Link to="/roadMap"><button className={styles.navButton}>Road Map</button></Link> 
        <Link to="/progress"><button className={styles.navButton}>Progress</button></Link> 
        <Link to="/practice"><button className={styles.navButton}>Practice</button></Link>
        <Link to="/projects"><button className={styles.navButton}>Projects</button></Link>
      </nav> 
    </header>
  );
};

export default Header;
