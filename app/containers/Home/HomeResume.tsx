import React, {forwardRef} from 'react';
import {HeadTitle, Title} from "@UIKit/Elements/Heading";
import styles from "@containers/Home/HomeSkills.module.css";

const HomeResume = forwardRef<HTMLDivElement, {}>((props, ref) => (
    <section id="resume" className={styles.section} ref={ref}>
        <div className={styles.container}>
            <HeadTitle title="RESUME" />
            <div className={styles.content}>
                <div className={styles.contentSide}>
                    <h3 className={styles.title}>Experience</h3>
                    <ul className={styles.list}>
                        {[1,2,3].map((i) => (
                            <li className={styles.item} key={i}>
                                <span className={styles.body}>
                                    <Title className={styles.position} component="span">Senior UX/UI Designer</Title>
                                    <span className={styles.date}>Jan 2020 - Present</span>
                                    <span className={styles.name}>Bergnaum, Hills and Howe</span>
                                    <span className={styles.text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.contentSide}>
                    <h3 className={styles.title}>Education</h3>
                    <ul className={styles.list}>
                        {[1,2,3].map((i) => (
                            <li className={styles.item} key={i}>
                                <span className={styles.body}>
                                    <Title className={styles.position} component="span">Senior UX/UI Designer</Title>
                                    <span className={styles.date}>Jan 2020 - Present</span>
                                    <span className={styles.name}>Bergnaum, Hills and Howe</span>
                                    <span className={styles.text}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.
                                    </span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
));

export default HomeResume;
