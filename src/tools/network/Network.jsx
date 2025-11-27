import React from "react";
import { useState } from "react";
import styles from "./network.module.css";
import WebServer from "./сoncepts/WebServer";
import Hardware from "./сoncepts/Hardware";
import Protocols from "./сoncepts/Protocols";
import Security from "./сoncepts/Security";
import OSI from "./сoncepts/OSI";

const Network = () => {
  const pages = {
    webServer: <WebServer />,
    hardware: <Hardware />,
    protocols: <Protocols />,
    security: <Security />,
    osi: <OSI />,
  };
  const [selectedPage, setSelectedPage] = useState("webServer");

  return (
    <div className={styles.network_container}>
      <div className={styles.network}>
        <h3>All Tools → Network</h3>
        <button
          onClick={() => setSelectedPage("webServer")}
          className={`${styles.navButton} ${selectedPage === "webServer" ? styles.activeButton  : ""}`}
        >
          Web-Servers (Nginx, Apache)
        </button>

        <button
          onClick={() => setSelectedPage("hardware")}
          className={`${styles.navButton} ${selectedPage === "hardware" ? styles.activeButton  : ""}`}
        >
          Laptop Hardware (CPU, RAM, SSD, GPU)
        </button>

        <button
          onClick={() => setSelectedPage("protocols")}
          className={`${styles.navButton} ${selectedPage === "protocols" ? styles.activeButton  : ""}`}
        >
          Network Protocols (HTTP, HTTPS, SSH, SSL, TLS)
        </button>

        <button
          onClick={() => setSelectedPage("security")}
          className={`${styles.navButton} ${selectedPage === "security" ? styles.activeButton  : ""}`}
        >
          Network Security (Firewall, Security Groups, VPN, Proxy)
        </button>

        <button
          onClick={() => setSelectedPage("osi")}
          className={`${styles.navButton} ${selectedPage === "osi" ? styles.activeButton  : ""}`}
        >
          OSI (Open Systems Interconnection) model
        </button>
      </div>
      <div className={styles.network_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default Network;
