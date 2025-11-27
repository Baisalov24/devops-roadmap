import React from "react";
import styles from "./practice.module.css";
import Sidebar from "../../components/Sidebar";

const Practice = () => {
  return (
    <div className={styles.practice_container}>
      <Sidebar />
      <div className={styles.practice_left_content}>
        <h1>Hello from Practice</h1>
      </div>
    </div>
  );
};

export default Practice;
