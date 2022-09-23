import React, {useState} from 'react';
import { Menu, Close } from "@mui/icons-material";
import styles from './Header.module.css';
import Image from "@UIKit/Elements/Image";
import NavLink from "@UIKit/Elements/NavLink";
import Button from "@UIKit/Button";
import classNames from "classnames";

const Header: React.FC = () => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <NavLink href="/" className={styles.logo}>
                    <Image src="/images/logo/logo_small.png" className={styles.logoImg} />
                </NavLink>
                <div className={styles.toggleBtn} onClick={() => setShowMenu(true)}>
                    <Menu />
                </div>
                <nav className={classNames(styles.links, {
                    [styles.linksOpen]: showMenu
                })}>
                    <div className={styles.toggleClose} onClick={() => setShowMenu(false)}>
                        <Close />
                    </div>
                    <NavLink className={styles.link} href="/">Home</NavLink>
                    <NavLink className={styles.link} href="/pricing">Pricing</NavLink>
                    <Button type="link" href="/contact-us/" className={styles.linkBtn}>Contact Us</Button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
