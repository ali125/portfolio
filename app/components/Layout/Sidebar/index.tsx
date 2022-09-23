import React from 'react';
import styles from './Sidebar.module.css';
import Image from "@UIKit/Elements/Image";
import NavLink from "@UIKit/Elements/NavLink";
import classNames from "classnames";

interface SidebarProp {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProp> = ({ isOpen, onClose }) => (
    <aside className={classNames(styles.container, {
        [styles.containerOpen]: isOpen
    })}>
        <div className={styles.top}>
            <Image src="/images/logo/logo_small.png" className={styles.logoImg} />
        </div>
        <div className={styles.content}>
            <nav onClick={onClose}>
                <NavLink className={styles.link} href="/#home">HOME</NavLink>
                <NavLink className={styles.link} href="/#about">ABOUT</NavLink>
                <NavLink className={styles.link} href="/#resume">RESUME</NavLink>
                <NavLink className={styles.link} href="/#portfolio">PORTFOLIO</NavLink>
                <NavLink className={styles.link} href="/#blog">BLOG</NavLink>
                <NavLink className={styles.link} href="/#contact">CONTACT</NavLink>
            </nav>
        </div>
    </aside>
);

export default Sidebar;
