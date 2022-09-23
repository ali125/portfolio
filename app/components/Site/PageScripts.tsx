import React from 'react';
import Script from "next/script";
import {HOST_NAME, SITE_TITLE} from "@config/Site";

const PageScripts = () => (
    <Script
        id="siteLdJson"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: SITE_TITLE,
                url: `${HOST_NAME}/`,
                logo: `${HOST_NAME}/static/media/images/logo/xlogo.png.pagespeed.ic.mTWeHvrWoN.webp`,
                sameAs: [
                    'https://www.instagram.com/robosize/',
                ],
                contactPoint: [
                    {
                        '@type': 'ContactPoint',
                        telephone: '+1-855-5501-133',
                        contactType: 'Customer Support',
                        areaServed: 'Canada',
                    },
                ],
            }),
        }}
    />
);

export default PageScripts;
