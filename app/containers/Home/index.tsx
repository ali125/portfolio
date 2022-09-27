import React, {useEffect, useRef, useState} from 'react';
import HomeIntro from "@containers/Home/HomeIntro";
import HomeAbout from "@containers/Home/HomeAbout";
import HomeServices from "@containers/Home/HomeServices";
import HomeSkills from "@containers/Home/HomeSkills";
import HomeResume from "@containers/Home/HomeResume";
import HomeContact from "@containers/Home/HomeContact";
import HomeLayout from "@components/Layout/HomeLayout";

const Home = () => {
    const [active, setActive] = useState<string | null>(null);
    const refIntro = useRef<HTMLDivElement>(null);
    const refAbout = useRef<HTMLDivElement>(null);
    const refServices = useRef<HTMLDivElement>(null);
    const refSkills = useRef<HTMLDivElement>(null);
    const refResume = useRef<HTMLDivElement>(null);
    const refContact = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (typeof window !== "undefined" && window) {
            window.addEventListener('scroll', (event: any) => {
                let activeSection = 'intro';
                const winScroll = (document.body.scrollTop || document.documentElement.scrollTop) + 125;

                if (refContact.current && winScroll >= refContact.current.offsetTop) {
                    activeSection = 'contact';
                } else if (refResume.current && winScroll >= refResume.current.offsetTop) {
                    activeSection = 'resume';
                } else if (refSkills.current && winScroll >= refSkills.current.offsetTop) {
                    activeSection = 'skills';
                } else if (refServices.current && winScroll >= refServices.current.offsetTop) {
                    activeSection = 'services';
                } else if (refAbout.current && winScroll >= refAbout.current.offsetTop) {
                    activeSection = 'about';
                } else if (refIntro.current && winScroll >= refIntro.current.offsetTop) {
                    activeSection = 'intro';
                }
                setActive(activeSection);
            });
        }
    }, [refContact]);
    return (
        <HomeLayout active={active}>
            <HomeIntro ref={refIntro} />
            <HomeAbout ref={refAbout} />
            <HomeServices ref={refServices} />
            <HomeSkills ref={refSkills} />
            <HomeResume ref={refResume} />
            <HomeContact ref={refContact} />
        </HomeLayout>
    );
};

export default Home;
