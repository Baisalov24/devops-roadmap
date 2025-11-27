import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  //   const items = [
  //     "Network",
  //     "Linux",
  //     "AWS",
  //     "Docker",
  //     "Github Actions",
  //     "Terraform",
  //     "Kubernetes",
  //   ];

  return (
    <div className={styles.sidebar}>
      <h3>All Tools</h3>
      <Link to="/network">
        <button className={styles.navButton}>Network</button>
      </Link>
      <Link to="/linux">
        <button className={styles.navButton}>Linux</button>
      </Link>
      <Link to="/aws">
        <button className={styles.navButton}>AWS</button>
      </Link>
      <Link to="/docker">
        <button className={styles.navButton}>Docker</button>
      </Link>
      <Link to="/kubernetes">
        <button className={styles.navButton}>Kubernetes</button>
      </Link>
      <Link to="/terraform">
        <button className={styles.navButton}>Terraform</button>
      </Link>
      <Link to="/kafka">
        <button className={styles.navButton}>Kafka</button>
      </Link>
      <Link to="/githubActions">
        <button className={styles.navButton}>Github Actions</button>
      </Link>
    </div>
  );
};

export default Sidebar;
