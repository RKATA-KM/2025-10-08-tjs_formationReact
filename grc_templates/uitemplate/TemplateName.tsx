import React from 'react';
import styles from './TemplateName.module.css';

interface ITemplateNameProps {
    children?:string|React.ReactElement|Array<React.ReactElement|string>
}

const TemplateName: React.FC<ITemplateNameProps> = () => (
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);

export default TemplateName;
