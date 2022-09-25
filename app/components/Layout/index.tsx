import React, {useState} from 'react';
import Header from "@components/Layout/Header";
import Footer from "@components/Layout/Footer";
import Sidebar from "@components/Layout/Sidebar";
import Backdrop from "@UIKit/Elements/Backdrop";

const Layout: React.FC<{ children: any }> = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const handleClose = () => {
        setShowSidebar(false);
    }
    return (
        <>
            <Header onShowMenu={() => setShowSidebar(true)} />
            <Sidebar isOpen={showSidebar} onClose={handleClose} />
            <Backdrop isShow={showSidebar} onClose={handleClose} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;
