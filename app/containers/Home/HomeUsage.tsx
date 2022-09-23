import React from 'react';
import styles from "./HomeUsage.module.css";
import Image from "@UIKit/Elements/Image";

const HomeUsage = () => {
    return (
        <section className={styles.usage}>
            <div className={styles.left}>
                <div className={styles.content}>
                    <h2>Fit Advisor</h2>
                    <p>Fit advisor helps your customers find the right size with a few clicks; so they can buy with confidence.</p>
                </div>
            </div>
            <div className={styles.right}>
                <Image src="/images/home/robosize_usage.gif" className={styles.gif} />
                <Image src="/images/home/robosize_usage_mobile.gif" className={styles.gifMobile} />
            </div>
        </section>
    );
};

export default HomeUsage;
