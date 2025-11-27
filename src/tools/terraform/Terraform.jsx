import React from "react";
import { useState } from "react";
import styles from "./terraform.module.css";
import Introduction from "./concepts/Introduction";



const Terraform = () => {
  const pages = {
    introduction: <Introduction />,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.terraform_container}>
      <div className={styles.terraform}>
        <h3>All Tools → Terraform</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          Introduction
        </button>

      </div>
      <div className={styles.terraform_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Terraform;
