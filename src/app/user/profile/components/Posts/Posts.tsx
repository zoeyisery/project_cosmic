import React, { useState } from "react";
import styles from "./Posts.module.css";

const Posts: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = ["Post", "Repost"];
  const tabContent = [
    "내가 포스팅한 목록입니다.",
    "내가 리포스팅한 목록입니다.",
  ];

  return (
    <div className={styles.postsContainer}>
      <div className={styles.posts}>
        <div className={styles.tabs}>
          {tabItems.map((tab, index) => (
            <button
              key={index}
              className={`${styles.tabButton} ${
                activeTab === index ? styles.active : ""
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className={styles.tabContent}>{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default Posts;
