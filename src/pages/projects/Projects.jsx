
import React from "react";
import styles from "./projects.module.css";
import Sidebar from "../../components/Sidebar";

const Projects = () => {
  return (
    <div className={styles.projects_container}>
      <Sidebar />
      <div className={styles.projects_left_content}>
        <h1>Hello from Projects</h1>
      </div>
    </div>
  );
};

export default Projects;
