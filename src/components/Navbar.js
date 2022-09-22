import React from "react";
import { FaBars } from "react-icons/fa";
import { BiX } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FaRedo } from "react-icons/fa";
import { BsGrid } from "react-icons/bs";
import { BsGear } from "react-icons/bs";
import { SiRos } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__content_menu}>
          <FaBars />
        </div>

        <div className={styles.header__content_logo}>
          <img
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt="Google Keep Logo"
          />
          <p>Keep</p>
        </div>
      </div>

      <div className={styles.header__icons}>
        <div className={styles.header__icons_search}>
          <input
            type="text"
            placeholder="Search"
            className={styles.header__icons_input}
          />
          <BiX className={styles.header__icons_searchX} />
          <FaSearch className={styles.header__icons1} />
        </div>

        <div className={styles.header__icons_set1}>
          <FaRedo className={styles.header__icons2} />
          <BsGrid className={styles.header__icons3} />
          <BsGear className={styles.header__icons4} />
        </div>

        <div className={styles.header__icons_set2}>
          <SiRos className={styles.header__icons5} />
          <CgProfile className={styles.header__icons6} />
        </div>
      </div>
    </div>
  )
}

export default Navbar;