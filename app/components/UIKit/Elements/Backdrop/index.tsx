import React from 'react';
import classNames from 'classnames';
import styles from './Backdrop.module.css';

interface BackdropProps {
    isShow: boolean,
    transparent?: boolean,
    onClose?: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ isShow, transparent = false, onClose }) => isShow ? (
    <div
        className={classNames(styles.backdrop, {
            [styles.transparent]: transparent
        })}
        onClick={onClose || undefined}
    />
) : null;

export default Backdrop;