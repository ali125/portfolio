import React from 'react';
import Footer from "@components/Layout/Footer";

const Layout: React.FC<{ children: any }> = ({ children }) => {

    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
