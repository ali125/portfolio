import React from 'react';
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";

const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
