import React from "react";
import { useState } from "react";
import styles from "./docker.module.css";
import Introduction from "./concepts/Introduction";
import Essentials from "./concepts/Essentials";
import Compose from "./concepts/Compose";



const Docker = () => {
  const pages = {
    introduction: <Introduction />,
    essentials: <Essentials />,
    compose: <Compose/>,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.docker_container}>
      <div className={styles.docker}>
        <h3>All Tools → Docker</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          Introduction
        </button>
        <button
          onClick={() => setSelectedPage("essentials")}
          className={`${styles.navButton} ${selectedPage === "essentials" ? styles.activeButton  : ""}`}
        >
        Docker Essentials
        </button>

        <button
          onClick={() => setSelectedPage("compose")}
          className={`${styles.navButton} ${selectedPage === "compose" ? styles.activeButton  : ""}`}
        >
          Dokcer Compose
        </button>
      </div>
      <div className={styles.docker_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Docker;
