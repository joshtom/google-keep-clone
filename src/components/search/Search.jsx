import React from "react";
import styles from './search.module.scss'
import CollectionsIcon from '@mui/icons-material/Collections';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import BrushIcon from '@mui/icons-material/Brush';

const Search = (props) => {
  return (
    <div className={styles.container}>
      <input type="search" placeholder="Take a note..." className={styles.searchInput} />
    </div>
  );
};

export default Search;
