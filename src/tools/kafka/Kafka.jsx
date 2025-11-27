import React from "react";
import { useState } from "react";
import styles from "./kafka.module.css";
import Introduction from "./concepts/Introduction";



const Kafka = () => {
  const pages = {
    introduction: <Introduction />,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.kafka_container}>
      <div className={styles.kafka}>
        <h3>All Tools → Kafka</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          Introduction Kafka
        </button>

      </div>
      <div className={styles.kafka_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Kafka;
