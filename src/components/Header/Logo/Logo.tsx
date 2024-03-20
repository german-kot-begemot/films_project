import React from "react";
import styles from "./Logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logoContent} data-testid="logo">
      <div>
        <h1>Logo</h1>
      </div>
    </div>
  );
};

export default Logo;
