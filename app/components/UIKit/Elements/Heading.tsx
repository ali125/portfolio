import React from 'react';
import styles from './Styles.module.css';

export const HeadTitle: React.FC<{ title?: string, children?: any }> = ({ title, children = null }) => (
    <h4 className={styles.headTitle}>{title || children}</h4>
);

export const Title: React.FC<{ title?: string, children?: any }> = ({ title, children = null }) => (
    <h4 className={styles.title}>{title || children}</h4>
);
