import type { AppProps } from 'next/app'
import SiteWrapper from "@components/Site/SiteWrapper";
import '/styles/var.css'
import '/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <SiteWrapper />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
