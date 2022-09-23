import React, { useMemo } from 'react';
import Head from "next/head";
import {HOST_NAME, SITE_DESCRIPTION, SITE_TITLE} from "@config/Site";
import {useRouter} from "next/router";

const PageHead = ({ title = SITE_TITLE, description = SITE_DESCRIPTION }) => {
        const router = useRouter();
        const hostName = useMemo(() => {
                const { basePath, isReady, asPath } = router;
                return isReady ? basePath || `${HOST_NAME}${asPath}` : HOST_NAME;
        }, [router]);
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="theme-color" content="#e64c21" />
                <meta
                    name="description"
                    content={description || SITE_TITLE}
                />
                <meta
                    property="og:description"
                    content={description || SITE_TITLE}
                />
                <meta property="og:url" content={`${hostName}/`} />
                <link rel="canonical" href={`${hostName}/`} />
                <link rel="shortcut icon" href="/images/logo/logo-red.png" />
                <title>{title}</title>
            </Head>
        );
}
export default PageHead;