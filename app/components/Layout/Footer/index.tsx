import React from 'react';
import styles from './Footer.module.css';
import NavLink from "@UIKit/Elements/NavLink";
import Image from "@UIKit/Elements/Image";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo}>
                    <Image src="/images/logo/logo_large.png" className={styles.logoImg} />
                    <p className={styles.logoText}>The right size, the first time</p>
                </div>
                <div className={styles.contact}>
                    <h4>Contact</h4>
                    <NavLink href="tel:+18555501133">+1 (855) 550-1133</NavLink>
                    <NavLink href="mailto:sales@robosize.com">sales@robosize.com</NavLink>
                </div>
            </div>
            <p className={styles.copyright}>All rights reserved, RoboSize LTD.</p>
        </footer>
    );
}

export default Footer;
