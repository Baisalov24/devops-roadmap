import React from "react";
import { useState } from "react";
import styles from "./linux.module.css";
import Essentials from "./concepts/Essentials";
import Commands from "./concepts/Commands";



const Linux = () => {
  const pages = {
    essentials: <Essentials />,
    commands: <Commands/>,
    
  };
  const [selectedPage, setSelectedPage] = useState("essentials");

  return (
    <div className={styles.linux_container}>
      <div className={styles.linux}>
        <h3>All Tools → Linux</h3>
        <button
          onClick={() => setSelectedPage("essentials")}
          className={`${styles.navButton} ${selectedPage === "essentials" ? styles.activeButton  : ""}`}
        >
          Linux Essentials
        </button>

        <button
          onClick={() => setSelectedPage("commands")}
          className={`${styles.navButton} ${selectedPage === "commands" ? styles.activeButton  : ""}`}
        >
          Linux Commands
        </button>
      </div>
      <div className={styles.linux_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Linux;
