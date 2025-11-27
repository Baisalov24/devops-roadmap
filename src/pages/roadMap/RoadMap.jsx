import React from "react";
import styles from "./roadMap.module.css";
import Sidebar from "../../components/Sidebar";

const RoadMap = () => {
  return (
    <div className={styles.roadMap_container}>
      <Sidebar />
      <div className={styles.roadMap_left_container}>
        <div className={styles.roadMap_left_content}>
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*toy2auexAGSCnj-xgLyS3A.gif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
