import React, {forwardRef} from 'react';
import {HeadTitle} from "@UIKit/Elements/Heading";
import styles from "@containers/Home/HomeSkills.module.css";
import ProgressBar from "@UIKit/Elements/ProgressBar";

const HomeSkills = forwardRef<HTMLDivElement, {}>((props, ref) => (
    <section id="skills" className={styles.section} ref={ref}>
        <div className={styles.container}>
            <HeadTitle title="MY SKILLS" />
            <div className={styles.content}>
                <div className={styles.contentSide}>
                    <h4 className={styles.title}>All the skills that I have in that field of work are mentioned.</h4>
                    <p>With 7+ years of experience in programming, I have been working on many advanced Computer Science projects. During these years, working with professionals has taught me a lot.</p>
                    <p>Although my recent focus has been on Front-End Development, I am also developing skills in Back-End. Moreover, it is worth mentioning that I really enjoy challenging projects.</p>
                </div>
                <div className={styles.contentSide}>
                    <ProgressBar title="ReactJs" percent={80} />
                    <ProgressBar title="NextJs" percent={75} />
                    <ProgressBar title="Redux" percent={60} />
                    <ProgressBar title="ES5 / ES6" percent={80} />
                    <ProgressBar title="HTML / CSS" percent={85} />
                    <ProgressBar title="Docker" percent={30} />
                    <ProgressBar title="NodeJs" percent={50} />
                    <ProgressBar title="ExpressJs" percent={50} />
                    <ProgressBar title="Python" percent={30} />
                </div>
            </div>
        </div>
    </section>
));

export default HomeSkills;
