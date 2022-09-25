import React from 'react';
import styles from "./HomeAbout.module.css";
import {HeadTitle, Title} from "@UIKit/Elements/Heading";

const HomeAbout = () => {
    return (
        <section id="about" className={styles.container}>
            <HeadTitle title="ABOUT ME" />
            <div>
                <div></div>
                <div>
                    <h4 className={styles.title}>Hi There! I'm Morty</h4>
                    <Title>Front-End Developer</Title>
                    <p>I am a Visual Designer with a strong focus on digital branding. Visul design seeks to attract, inspire, create desires and motivate people to respond to messages, with a view to making a favorable impact.</p>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.key}>Birthday</span>
                            :
                            <span className={styles.value}>May 07, 1990</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeAbout;
