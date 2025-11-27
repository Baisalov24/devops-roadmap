import React from "react";
import { useState } from "react";
import styles from "./gitActions.module.css";
import Introduction from "./concepts/Introduction";



const GitActions = () => {
  const pages = {
    introduction: <Introduction />,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.gitActions_container}>
      <div className={styles.gitActions}>
        <h3>All Tools → Github Actions</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          Introduction Github Actions
        </button>

      </div>
      <div className={styles.gitActions_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default GitActions;
