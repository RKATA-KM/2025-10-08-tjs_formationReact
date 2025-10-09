import React from 'react';
import styles from './MemeSvgViewer.module.css';

interface MemeSvgViewerProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const MemeSvgViewer: React.FC<MemeSvgViewerProps> = () => (
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);

export default MemeSvgViewer;
