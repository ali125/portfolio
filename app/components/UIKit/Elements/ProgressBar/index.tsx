import React from 'react';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    title?: string;
    percent: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percent }) => (
    <div className={styles.container}>
        <div className={styles.head}>
            {title && <span className={styles.title}>{title}</span>}
            <span className={styles.percent}>{percent}%</span>
        </div>
        <div className={styles.bar}>
            <div className={styles.progress} style={{ width: `${percent}%` }} />
        </div>
    </div>
);

export default ProgressBar;
