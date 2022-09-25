import React, {useMemo} from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    const year = useMemo(() => new Date().getFullYear(), []);
    return (
        <footer className={styles.container}>
            <p className={styles.copyright}>&copy; {year}. Designed by Morty. All right reserved.</p>
        </footer>
    );
}

export default Footer;
