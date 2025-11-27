import React from "react";
import { useState } from "react";
import styles from "./AWS.module.css";
import Introduction from "./services/Introduction";
import EC2 from "./services/EC2";
import VPC from "./services/VPC";
import IAM from "./services/IAM";
import AppAutoScaling from "./services/AppAutoScaling";
import Storage from "./services/Storage";
import Route53 from "./services/Route53";
import Cloudwatch from "./services/Cloudwatch";
import Database from "./services/Database";
import Cloudfront from "./services/Cloudfront";
import ElastiCashe from "./services/ElastiCashe";
import Lambda from "./services/Lambda";
import APIGateway from "./services/APIGateway";
import GlobalAccelerator from "./services/GlobalAccelerator";



const AWS = () => {
  const pages = {
    introduction: <Introduction />,
    ec2: <EC2/>,
    vpc: <VPC/>,
    iam: <IAM/>,
    autoScaling: <AppAutoScaling/>,
    storage: <Storage/>,
    route53: <Route53/>,
    cloudwatch: <Cloudwatch/>,
    database: <Database/>,
    cloudfront: <Cloudfront/>,
    elastiCashe: <ElastiCashe/>,
    lambda: <Lambda/>,
    apiGateway: <APIGateway/>,
    globalAccelerator: <GlobalAccelerator/>,
    
  };
  const [selectedPage, setSelectedPage] = useState("introduction");

  return (
    <div className={styles.aws_container}>
      <div className={styles.aws}>
        <h3>All Tools → AWS</h3>
        <button
          onClick={() => setSelectedPage("introduction")}
          className={`${styles.navButton} ${selectedPage === "introduction" ? styles.activeButton  : ""}`}
        >
          AWS Introduction
        </button>

        <button
          onClick={() => setSelectedPage("ec2")}
          className={`${styles.navButton} ${selectedPage === "ec2" ? styles.activeButton  : ""}`}
        >
          EC2 (Elastic Compute Cloud)
        </button>
        <button
          onClick={() => setSelectedPage("vpc")}
          className={`${styles.navButton} ${selectedPage === "vpc" ? styles.activeButton  : ""}`}
        >
          VPC (Virtual Private Cloud)
        </button>
        <button
          onClick={() => setSelectedPage("iam")}
          className={`${styles.navButton} ${selectedPage === "iam" ? styles.activeButton  : ""}`}
        >
          IAM (Identity and Access Management)
        </button>
        <button
          onClick={() => setSelectedPage("autoScaling")}
          className={`${styles.navButton} ${selectedPage === "autoScaling" ? styles.activeButton  : ""}`}
        >
         App Auto Scaling
        </button>
        <button
          onClick={() => setSelectedPage("storage")}
          className={`${styles.navButton} ${selectedPage === "storage" ? styles.activeButton  : ""}`}
        >
          Storage  (EBS, EFS, S3)
        </button>
        <button
          onClick={() => setSelectedPage("route53")}
          className={`${styles.navButton} ${selectedPage === "route53" ? styles.activeButton  : ""}`}
        >
          Route 53 (DNS)
        </button>
        <button
          onClick={() => setSelectedPage("cloudwatch")}
          className={`${styles.navButton} ${selectedPage === "cloudwatch" ? styles.activeButton  : ""}`}
        >
          Cloudwatch
        </button>
        <button
          onClick={() => setSelectedPage("database")}
          className={`${styles.navButton} ${selectedPage === "database" ? styles.activeButton  : ""}`}
        >
         Database (RDS, DynamoDB)
        </button>
        <button
          onClick={() => setSelectedPage("cloudfront")}
          className={`${styles.navButton} ${selectedPage === "cloudfront" ? styles.activeButton  : ""}`}
        >
         Cloudfront
        </button>
        <button
          onClick={() => setSelectedPage("elastiCashe")}
          className={`${styles.navButton} ${selectedPage === "elastiCashe" ? styles.activeButton  : ""}`}
        >
        ElastiCashe 
        </button>
        <button
          onClick={() => setSelectedPage("lambda")}
          className={`${styles.navButton} ${selectedPage === "lambda" ? styles.activeButton  : ""}`}
        >
        Lambda
        </button>
        <button
          onClick={() => setSelectedPage("apiGateway")}
          className={`${styles.navButton} ${selectedPage === "apiGateway" ? styles.activeButton  : ""}`}
        >
        API Gateway
        </button>
        <button
          onClick={() => setSelectedPage("globalAccelerator")}
          className={`${styles.navButton} ${selectedPage === "globalAccelerator" ? styles.activeButton  : ""}`}
        >
        Global Accelerator
        </button>
      </div>
      <div className={styles.aws_left_content}>{pages[selectedPage]}</div>
    </div>
  );
};

export default AWS;
