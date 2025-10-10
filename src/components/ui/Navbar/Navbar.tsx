import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router';

interface NavbarProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const Navbar: React.FC<NavbarProps> = () => (
  <>
    <div className={styles.Navbar}>
      <Link to="/">Home</Link>
      <Link to="/editor">Editor</Link>
    </div>
  </>
);

export default Navbar;
