import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SiteWrapper from "@components/Site/SiteWrapper";
import Layout from "@components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SiteWrapper />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp
