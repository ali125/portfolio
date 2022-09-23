import React, { useEffect, useState } from 'react';
import { useAmp } from 'next/amp';
import NextImage from 'next/image';
import classNames from 'classnames';
import { SITE_TITLE } from '@config/Site';
import styles from './Styles.module.css';

interface ImageProps {
    src: string;
    errorImage?: string;
    alt?: string;
    layout?: "fill" | "fixed" | "intrinsic" | "responsive" | undefined;
    className?: any;
    width?: string | number;
    height?: string | number;
}

const Image: React.FC<ImageProps> = ({ src, errorImage = null, alt = SITE_TITLE, layout = 'fill', ...props }) => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const isAmp = useAmp();

    useEffect(() => {
        setImageSrc(src);
    }, [src]);

    if (isAmp) {
        return <amp-img src={imageSrc} onError={() => setImageSrc(errorImage)} alt={alt} layout="fill" />;
    }
    return (
        <span className={classNames(styles.Image, props.className)}>
          <NextImage
              src={imageSrc ? imageSrc : '/images/default-image.jpg'}
              onError={() => setImageSrc(errorImage)}
              className={props.className}
              alt={alt}
              layout={layout}
              width={props.width}
              height={props.height}
          />
        </span>
    );
}

export default Image;