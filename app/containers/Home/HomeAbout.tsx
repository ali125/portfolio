import React, {forwardRef} from 'react';
import styles from "./HomeAbout.module.css";
import {HeadTitle, Title} from "@UIKit/Elements/Heading";
import NavLink from "@UIKit/Elements/NavLink";
import Button from "@UIKit/Button";

const HomeAbout = forwardRef<HTMLDivElement, {}>((props, ref) => (
    <section id="about" ref={ref}>
        <div className={styles.container}>
            <HeadTitle title="ABOUT ME" />
            <div className={styles.content}>
                <div className={styles.contentSide}></div>
                <div className={styles.contentSide}>
                    <h4 className={styles.title}>Hi There! I'm Morty</h4>
                    <Title>Front-End Developer</Title>
                    <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.</p>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.key}>Birthday</span>
                            :
                            <span className={styles.value}>May 07, 1990</span>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.key}>Phone</span>
                            :
                            <NavLink href="whatsapp://send?phone=+989306173825" className={styles.value}>
                                +98 930-617-3825
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.key}>Email</span>
                            :
                            <NavLink href="mailto:ali.mortazavi121@gmail.com" className={styles.value}>
                                ali.mortazavi121@gmail.com
                            </NavLink>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.key}>Language</span>
                            :
                            <span className={styles.value}>English, Persian</span>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.key}>Freelance</span>
                            :
                            <span className={styles.value}>Available</span>
                        </li>
                    </ul>
                    <Button inline type="link" href="./cv.pdf" download="ali-mortazavi.pdf">Download CV</Button>
                </div>
            </div>
        </div>
    </section>
));

export default HomeAbout;
