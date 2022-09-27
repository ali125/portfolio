import React from 'react';
import classnames from "classnames";
import styles from './Styles.module.css';

export const HeadTitle: React.FC<{ title?: string, children?: any }> = ({ title, children = null }) => (
    <div className={styles.head}>
        <h4 className={styles.headTitle}>{title || children}</h4>
        <h4 className={styles.headSubtitle}>{title || children}</h4>
    </div>
);

interface TitleProps {
    title?: string;
    component?: string;
    children?: any;
    className?: any;
}

export const Title: React.FC<TitleProps> = ({ title, component = null, children = null, className }) => {
    const Component = component || 'h4';
    // @ts-ignore
    return <Component className={classnames(styles.title, className)}>{title || children}</Component>;
}
