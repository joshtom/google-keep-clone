import React, { useState } from "react";
import styles from "./Card.module.scss";
import { MdOutlineBrush } from "react-icons/md";
import { MdOutlineImage } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";
import { VscPinned } from "react-icons/vsc";
import { BiBellPlus } from "react-icons/bi";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdOutlineColorLens } from "react-icons/md";
import { RiFolderDownloadLine } from "react-icons/ri";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BiUndo } from "react-icons/bi";
import { BiRedo } from "react-icons/bi";

const Card = () => {
  const [menuCardIsOpen, setMenuCardIsOpen] = useState(false);
  const [editFormIsOpen, setEditFormIsOpen] = useState(false);

  const editForm = (
    <div className={styles.input_div1}>
      <input type="text" placeholder="Title" />

      <VscPinned className={styles.icon} />
    </div>
  );

  const editFormIcons = (
    <div className={styles.icon__list}>

      <div className={styles.icon_row}>
        <BiBellPlus className={styles.icon} />

        <MdOutlinePersonAddAlt className={styles.icon} />

        <MdOutlineColorLens className={styles.icon} />

        <MdOutlineImage className={styles.icon} />

        <RiFolderDownloadLine className={styles.icon} />

        <BiDotsVerticalRounded onClick={() => setMenuCardIsOpen(true)} className={styles.icon} />

        <BiUndo className={styles.icon} />

        <BiRedo className={styles.icon} />
      </div>

      <button onClick={() => setEditFormIsOpen(false)}> Close </button>
    </div>
  );

  const menuCard = (
    <div className={styles.menu}>
      <ul>
        <li>Add label</li>
        <li>Add drawing</li>
        <li>Add checkboxes</li>
      </ul>
    </div>
  );

  return (
    <>
    <div className={styles.input_card}>
      <form className={styles.card}>
        {editFormIsOpen ? editForm : ""}

        <div className={styles.input_div2}>
          <input
            onClick={() => setEditFormIsOpen(true)}
            type="text"
            placeholder="Take a note..."
          />

          <div className={styles.icons}>
            <MdOutlineCheckBox className={styles.icon} />

            <MdOutlineBrush className={styles.icon} />

            <MdOutlineImage className={styles.icon} />
          </div>
        </div>

        {editFormIsOpen ? editFormIcons : ""}
      </form>
    </div>
    {menuCardIsOpen ? menuCard : ""}
    </>
  )
};

export default Card;