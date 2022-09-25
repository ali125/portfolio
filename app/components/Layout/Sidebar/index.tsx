import React from 'react';
import Image from "@UIKit/Elements/Image";
import NavLink from "@UIKit/Elements/NavLink";
import classNames from "classnames";
import styles from './Sidebar.module.css';
import {useRouter} from "next/router";

const links = [
    {
        link: '/#home',
        title: 'HOME',
    },
    {
        link: '/#about',
        title: 'ABOUT',
    },
    {
        link: '/#resume',
        title: 'RESUME',
    },
    {
        link: '/#portfolio',
        title: 'PORTFOLIO',
    },
    {
        link: '/#blog',
        title: 'BLOG',
    },
    {
        link: '/#contact',
        title: 'CONTACT',
    },
];

interface SidebarProp {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProp> = ({ isOpen, onClose }) => {
    const router = useRouter();
    return (
        <aside className={classNames(styles.sidebar, {
            [styles.sidebarOpen]: isOpen
        })}>
            <div className={styles.profile}>
                <div className={styles.author}>
                    <Image src="/images/logo/logo_small.png" className={styles.avatar} />
                </div>
            </div>
            <div className={styles.content}>
                <nav className={styles.navigation} onClick={onClose}>
                    {links.map((item) => (
                        <NavLink
                            key={item.link}
                            href={item.link}
                            className={classNames(styles.link, {
                                [styles.active]: router.asPath === item.link
                            })}
                        >
                            {item.title}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;
