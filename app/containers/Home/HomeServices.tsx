import React, {forwardRef} from 'react';
import Image from "@UIKit/Elements/Image";
import {HeadTitle} from "@UIKit/Elements/Heading";
import styles from "@containers/Home/HomeServices.module.css";

const data = [
    {
        id: 1,
        title: 'Front End',
        text: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
        image: '/images/services/front-end.png',
        imageActive: '/images/services/front-end-active.png',
    },
    {
        id: 2,
        title: 'Back End',
        text: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
        image: '/images/services/backend.png',
        imageActive: '/images/services/backend-active.png',
    },
    {
        id: 3,
        title: 'Devops',
        text: 'Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.',
        image: '/images/services/devops.png',
        imageActive: '/images/services/devops-active.png',
    },
];

const HomeServices = forwardRef<HTMLDivElement, {}>((props, ref) => (
    <section id="services" ref={ref}>
        <div className={styles.container}>
            <HeadTitle title="SERVICES" />
            <div className={styles.content}>
                {data.map((item) => (
                    <div key={item.id} className={styles.box}>
                        <div className={styles.image}>
                            <Image src={item.image} className={styles.img} alt="Morty | Front End" />
                            <Image src={item.imageActive} className={styles.imgActive} alt="Morty | Front End" />
                        </div>
                        <h5 className={styles.title}>{item.title}</h5>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
));

export default HomeServices;
