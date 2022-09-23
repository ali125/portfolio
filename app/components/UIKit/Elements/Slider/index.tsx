import React, {useEffect, useState} from 'react';
import styles from './Slider.module.css';
import classNames from "classnames";

interface SliderDotsProps {
    data: Array<any>;
    active: number;
    onClick?: (index: number) => void;
}

export const SliderDots: React.FC<SliderDotsProps> = ({ data, active = 0, onClick }) => {
    return (
        <ul className={styles.dots}>
            {data.map((item, index) => (
                <li
                    key={item?.id || index}
                    className={classNames(styles.dot, {
                        [styles.dotActive]: index === active
                    })}
                    onClick={onClick && onClick.bind(null, index)}
                />
            ))}
        </ul>
    );
}

interface SliderProps {
    data: Array<any>;
    component: any;
    interval?: number;
}

const Slider: React.FC<SliderProps> = ({ data, component: Component, interval = 5000 }) => {
    const [active, setActive] = useState<number>(0);
    const [loop, setLoop] = useState<any>(null);
    const [reset, setReset] = useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive(prev => (prev + 1) % data.length);
        }, interval);
        setLoop(intervalId);
        return () => clearInterval(intervalId);
    }, [reset, interval]);

    const handleActive = (index: number = 0) => {
        setActive(index);
        clearInterval(loop);
        setReset(prev => !prev);
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {data.map((item, index) => (
                    <div
                        key={item.id}
                        className={classNames(styles.item, {
                            [styles.itemActive]: active === index
                        })}
                    >
                        <Component item={item} />
                    </div>
                ))}
            </div>
            <SliderDots data={data} active={active} onClick={handleActive} />
        </div>
    )
}

export default Slider;
