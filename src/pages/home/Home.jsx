import React from "react";
import styles from "./home.module.css";
import Sidebar from "../../components/Sidebar";

const Home = () => {
  return (
    <div className={styles.home_container}>
      <Sidebar />
      <div className={styles.home_left_container}>
        <div className={styles.home_left_content}>
          <h1>DevOps Engineer Goal: 200 000$</h1>
          <br />
          <img src="./images/goal.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
