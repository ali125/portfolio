import React from 'react';
import Image from "@UIKit/Elements/Image";
import NavLink from "@UIKit/Elements/NavLink";
import classNames from "classnames";
import styles from './Sidebar.module.css';

const links = [
    {
        link: '/#intro',
        title: 'HOME',
    },
    {
        link: '/#about',
        title: 'ABOUT',
    },
    {
        link: '/#services',
        title: 'SERVICES',
    },
    {
        link: '/#skills',
        title: 'SKILLS',
    },
    {
        link: '/#resume',
        title: 'RESUME',
    },
    {
        link: '/#contact',
        title: 'CONTACT',
    },
];

interface SidebarProp {
    isOpen: boolean;
    active: string | null;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProp> = ({ active, isOpen, onClose }) => (
    <aside className={classNames(styles.sidebar, {
        [styles.sidebarOpen]: isOpen
    })}>
        <div className={styles.profile}>
            <div className={styles.author}>
                <Image src="/images/profile.jpg" className={styles.avatar} />
            </div>
        </div>
        <div className={styles.content}>
            <nav className={styles.navigation} onClick={onClose}>
                {links.map((item) => (
                    <NavLink
                        key={item.link}
                        href={item.link}
                        className={classNames(styles.link, {
                            [styles.active]: active ? item.link.includes(active) : false
                        })}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    </aside>
);

export default Sidebar;
