
import React from "react";
import styles from "./progress.module.css";
import Sidebar from "../../components/Sidebar";

const Progress = () => {
  return (
    <div className={styles.progress_container}>
      <Sidebar />
      <div className={styles.progress_left_content}>
        <h1>Hello from Progress</h1>
      </div>
    </div>
  );
};

export default Progress;
