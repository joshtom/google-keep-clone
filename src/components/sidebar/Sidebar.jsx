import React from "react";
import styles from './styles/sidebar.module.scss'
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <ul className={styles.sidebarlist}>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              id={window.location.pathname === val.link ? 'active' : ''}
              className = {styles.row}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              <div id={styles.icon}>{val.icon}</div>
              <div id={styles.title}>{val.title}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
