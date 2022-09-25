import React from 'react';
import {GitHub, Instagram, LinkedIn, YouTube} from "@mui/icons-material";
import styles from './HomeIntro.module.css';
import NavLink from "@UIKit/Elements/NavLink";

const HomeIntro = () => {
    return (
        <section id="intro" className={styles.section}>
            <div className={styles.intro}>
                <h2 className={styles.heroText}>Hi, I am <span className={styles.heroName}>Morty</span></h2>
                <p>I am a frontend web developer. I can provide clean code and pixel perfect design.</p>
                <p>I also make website more & more interactive with web animations.</p>
                <ul className={styles.social}>
                    <li className={styles.socialItem}>
                        <NavLink href="/" target="_blank" className={styles.socialLink}>
                            <YouTube />
                        </NavLink>
                    </li>
                    <li className={styles.socialItem}>
                        <NavLink href="/" target="_blank" className={styles.socialLink}>
                            <GitHub />
                        </NavLink>
                    </li>
                    <li className={styles.socialItem}>
                        <NavLink href="/" target="_blank" className={styles.socialLink}>
                            <LinkedIn />
                        </NavLink>
                    </li>
                    <li className={styles.socialItem}>
                        <NavLink href="/" target="_blank" className={styles.socialLink}>
                            <Instagram />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default HomeIntro;
