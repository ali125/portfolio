import React from 'react';
import { Menu, Close } from "@mui/icons-material";
import styles from './Header.module.css';

interface HeaderProps {
    onShowMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ onShowMenu }) => (
    <header className={styles.container}>
        <div className={styles.content}>
            <div className={styles.toggleBtn} onClick={onShowMenu}>
                <Menu />
            </div>
        </div>
    </header>
);

export default Header;
