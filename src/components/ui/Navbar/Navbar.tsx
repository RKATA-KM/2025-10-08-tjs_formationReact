import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const Navbar: React.FC<NavbarProps> = () => (
  <>
<div className={styles.topnav}>
  <a className={styles.active} href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
</div>

  </>

);

export default Navbar;
