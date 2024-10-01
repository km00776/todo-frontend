import React from "react";
import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>hi</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <p>hi</p>
        </div>
        <div className={styles.card}>
          <p>hi</p>
        </div>
        <div className={styles.card}>
          <p>hi</p>
        </div>
        <div className={styles.card}>
          <p>hi</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
