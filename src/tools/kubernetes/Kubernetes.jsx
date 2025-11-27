import React from "react";
import { useState } from "react";
import styles from "./kubernetes.module.css";
import Introduction from "./concepts/Introduction";



const Kubernetes = () => {
  const pages = {
    introduction: <Introduction />,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.kubernetes_container}>
      <div className={styles.kubernetes}>
        <h3>All Tools → Kubernetes</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          Introduction
        </button>

      </div>
      <div className={styles.kubernetes_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Kubernetes;
