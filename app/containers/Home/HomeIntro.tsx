import React, {useEffect, useState} from 'react';
import Button from "@UIKit/Button";
import Image from "@UIKit/Elements/Image";
import styles from './HomeIntro.module.css';

const IMAGES = [
    '/images/home/scan_1.png',
    '/images/home/scan_2.png',
    '/images/home/scan_3.png',
    '/images/home/scan_4.png',
    '/images/home/scan_5.png',
];

const HomeIntro = () => {
    const [scanner, setScanner] = useState<boolean>(true);
    const [active, setActive] = useState<number>(0);
    const [loop, setLoop] = useState<any>(null);
    const [reset, setReset] = useState<boolean>(false);

    const handleScanner = () => {
        setScanner(false);
        setTimeout(() => {
            setScanner(true);
        }, 1000)
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleScanner();
            setActive(prev => (prev + 1) % IMAGES.length);
        }, 6000);
        setLoop(intervalId);
        return () => clearInterval(intervalId);
    }, [reset]);

    const handleActive = (index: number = 0) => {
        setActive(index);
        handleScanner();
        clearInterval(loop);
        setReset(prev => !prev);
    }
    return (
        <section className={styles.intro}>
            <div className={styles.left}>
                <h1>
                    <span>Iron Out Sizing</span>
                    <span>Do Smart Business</span>
                </h1>
                <p>
                    Finding the perfect fit with a few clicks <strong>boosts sales</strong> and <strong>cuts returns.</strong>
                    <br />
                    The right size, The first time
                </p>
                <Button inline type="link" href="/contact-us/" title="Get a free demo" />
            </div>
            <div className={styles.right}>
                <div className={styles.scanner}>
                    <div className={styles.panel}>
                        <ul className={styles.panelList}>
                            {IMAGES.map((img, index) => (
                                <li key={img} className={active === index ? styles.scanItemActive : styles.scanItem}>
                                    <Image width={300} height={300} src={img} className={styles.scanImg} />
                                </li>
                            ))}
                            {scanner && <li className={styles.panelScanner} />}
                        </ul>
                        <span className={styles.panelShadow} />
                    </div>
                    <ul className={styles.thumbs}>
                        {IMAGES.map((img, index) => (
                            <li key={img} className={active === index ? styles.thumbItemActive : styles.thumbItem} onClick={() => handleActive(index)}>
                                <Image width={60} height={60} className={styles.thumbImg} src={img} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default HomeIntro;
