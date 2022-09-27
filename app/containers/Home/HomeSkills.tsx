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
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
                    <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                </div>
                <div className={styles.contentSide}>
                    <ProgressBar title="ReactJs" percent={80} />
                    <ProgressBar title="NextJs" percent={80} />
                    <ProgressBar title="Redux" percent={80} />
                    <ProgressBar title="ES5 / ES6" percent={80} />
                    <ProgressBar title="HTML / CSS" percent={80} />
                    <ProgressBar title="Docker" percent={80} />
                    <ProgressBar title="Python" percent={80} />
                </div>
            </div>
        </div>
    </section>
));

export default HomeSkills;
