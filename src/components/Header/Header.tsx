import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../Home/imagesHome/logo1.png';
import Search from '../Search/Search';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <div className={styles.headerContent} data-testid='header'>
      <div className={styles.navWrapper}>
        <Navbar />
        <ul className={styles.navBar}>
          <li>
            <Search />
          </li>
          <li>
            <NavLink className={styles.categories} to='/home' end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.categories} to='/categories' end>
              Categories
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.logoWrapper}>
        <img className={styles.logo} src={logo} alt='' />
        <h6>BroDucktion Film</h6>
      </div>
    </div>
  );
};

export default Header;
