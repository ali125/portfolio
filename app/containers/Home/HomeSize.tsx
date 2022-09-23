import React from 'react';
import Image from "@UIKit/Elements/Image";
import styles from "./HomeSize.module.css";
import Slider from "@UIKit/Elements/Slider";

const DATA = [
    {
        id: 1,
        title: 'Increased conversion rates',
        desc: 'You’ll see increased conversion rates when your customers use Robosize. Why? Because they’ll buy with confidence knowing that what they buy will actually fit. No more hesitation, just satisfied and happy customers.',
        image: '/images/home/value_1.svg',
    },
    {
        id: 2,
        title: 'Decrease wrong size return rates',
        desc: 'Your customers will now see what the perfect size looks like on their unique body shape! They no longer need to buy multiple sizes or guessing on a size hoping that it fits!',
        image: '/images/home/value_2.svg',
    },
    {
        id: 3,
        title: 'Decrease cart abandonment rates due to size hesitancy',
        desc: 'Robosize provides confidence that your customers will get the right size the first time eliminating any hesitancy in their purchasing journey.',
        image: '/images/home/value_3.svg',
    },
    {
        id: 4,
        title: 'Grow consumer confidence with your brand',
        desc: 'First time shoppers have so many sizing questions. With Robosize, we take the guess work and hesitation out of the equation, paving the way for a great experience and great reviews for you!',
        image: '/images/home/value_4.svg',
    },
    {
        id: 5,
        title: 'Increase repurchase rates',
        desc: 'When your customers receive their purchase and it actually fits, they’ll gladly come back and buy more! Satisfied customers are the best customers!',
        image: '/images/home/value_5.svg',
    },
];

interface ContentItemProp {
    item: {
        id: number;
        title: string;
        desc: string;
        image: string;
    },
    active: number | null;
}

const ContentItem: React.FC<ContentItemProp> = ({ item }) => (
    <div className={styles.card}>
        <div className={styles.cardText}>
            <span className={styles.cardNum}>{item.id}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
        </div>
        <div className={styles.cardImgContaner}>
            <div className={styles.cardImg}>
                <Image src={item.image} className={styles.svg} />
            </div>
        </div>
    </div>
)

const HomeSize = () => {
    // const [active, setActive] = useState<number>(0);
    // const [loop, setLoop] = useState<any>(null);
    // const [reset, setReset] = useState<boolean>(false);
    //
    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setActive(prev => (prev + 1) % DATA.length);
    //     }, 3000);
    //     setLoop(intervalId);
    //     return () => clearInterval(intervalId);
    // }, [reset]);
    // const handleActive = (index: number = 0) => {
    //     setActive(index);
    //     clearInterval(loop);
    //     setReset(prev => !prev);
    // }
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <Image src="/images/home/change-size.gif" className={styles.gif} />
            </div>
            <div className={styles.right}>
                <h2>We directly improve your business</h2>
                <div className={styles.cards}>
                    <div className={styles.cardSlider}>
                        <Slider data={DATA} component={ContentItem} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSize;
