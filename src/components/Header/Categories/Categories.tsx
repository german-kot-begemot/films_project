import React from "react";
import styles from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={styles.categoriesContent} data-testid="categories">
      <div>
        <h1>Categories</h1>
      </div>
    </div>
  );
};

export default Categories;
