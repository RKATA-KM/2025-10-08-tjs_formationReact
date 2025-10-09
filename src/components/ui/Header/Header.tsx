import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const Header: React.FC<HeaderProps> = () => (
<div className={styles.header}>
  <h1>Header</h1>
  <p>My supercool header</p>
</div>
);

export default Header;
