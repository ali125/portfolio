import React, {useEffect, useState} from 'react';
import Image from "@UIKit/Elements/Image";
import styles from './HomeYoungWomen.module.css';
import Slider from "@UIKit/Elements/Slider";

const DATA = [
    {
        id: 1,
        text: 'Our Robosize sizing solution takes less than 10 minutes to integrate on any website platform, and we’ll be there to help you every step along the way.',
        image: '/images/home/lamp.svg',
    },
    {
        id: 2,
        text: 'No brick and mortar store does well without a fitting room. Add a virtual fitting room to your online store now.',
        image: '/images/home/snop.svg',
    },
];

const ContentItem: React.FC<{ item: any }> = ({ item }) => (
    <div className={styles.card}>
        <Image src={item.image} className={styles.icon} />
        <p>{item.text}</p>
    </div>
);

const HomeYoungWomen = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src="/images/home/young-women-having-fun.png" className={styles.image} />
            </div>
            <div className={styles.right}>
                <div className={styles.sliderContainer}>
                    <Slider data={DATA} component={ContentItem} />
                </div>
            </div>
        </div>
    );
}

export default HomeYoungWomen;