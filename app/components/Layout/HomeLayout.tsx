import React, {useState} from 'react';
import Header from "@components/Layout/Header";
import Sidebar from "@components/Layout/Sidebar";
import Backdrop from "@UIKit/Elements/Backdrop";
import Footer from "@components/Layout/Footer";

const HomeLayout: React.FC<{ active: string | null, children: any }> = ({ active, children }) => {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);
    const handleClose = () => {
        setShowSidebar(false);
    }
    return (
        <>
            <Header onShowMenu={() => setShowSidebar(true)} />
            <Sidebar active={active} isOpen={showSidebar} onClose={handleClose} />
            <Backdrop isShow={showSidebar} onClose={handleClose} />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default HomeLayout;
