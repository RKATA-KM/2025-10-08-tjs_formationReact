import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const Footer: React.FC<FooterProps> = () => (
  <footer className={styles.Footer} data-testid="Footer">
    Mon footer
  </footer>
);

export default Footer;
