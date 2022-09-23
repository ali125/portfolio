import React from 'react';
import styles from './Input.module.css';

const InputLabel: React.FC<{ children: string }> = ({ children }) => (children ? <span className={styles.Label}>{children}</span> : null);

export default InputLabel;
