import React, {forwardRef} from 'react';
import {HeadTitle} from "@UIKit/Elements/Heading";
import styles from "@containers/Home/HomeContact.module.css";
import Input from "@UIKit/Input";
import Button from "@UIKit/Button";
import {Email, GitHub, Instagram, LinkedIn, Phone, YouTube} from "@mui/icons-material";
import NavLink from "@UIKit/Elements/NavLink";

const HomeContact = forwardRef<HTMLDivElement, {}>((props, ref) => (
    <section id="contact" className={styles.section} ref={ref}>
        <div className={styles.container}>
            <HeadTitle title="CONTACT ME" />

            <div className={styles.content}>
                <div className={styles.contentSide}>
                    <h4 className={styles.title}>Just say Hello</h4>
                    <form action="">
                        <Input placeholder="Your Name" />
                        <Input placeholder="Your Email" />
                        <Input placeholder="Your Subject" />
                        <Input multiline rows={5} placeholder="Your Message" />

                        <Button inline>Send Message</Button>
                    </form>
                </div>
                <div className={styles.contentSide}>
                    <h4 className={styles.title}>Contact Info</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>

                    <ul>
                        <li className={styles.item}>
                            <Email className={styles.icon} />
                            <span className={styles.body}>
                                <span className={styles.label}>Email</span>
                                <NavLink
                                    href="mailto:ali.mortazavi121@gmail.com"
                                    className={styles.value}
                                >
                                    ali.mortazavi121@gmail.com
                                </NavLink>
                            </span>
                        </li>
                        <li className={styles.item}>
                            <Phone className={styles.icon} />
                            <span className={styles.body}>
                                <span className={styles.label}>Phone</span>
                                <NavLink
                                    href="tel:+989306173825"
                                    className={styles.value}
                                >
                                    (+98) 930-617-3825
                                </NavLink>
                            </span>
                        </li>
                    </ul>

                    <p className={styles.socialTitle}>Visit my social profile and get connected</p>
                    <ul className={styles.socialMedia}>
                        <li>
                            <NavLink href="" target="_blank" className={styles.socialLink}>
                                <YouTube className={styles.socialIcon} />
                                <span className={styles.socialName}>Youtube</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="" target="_blank" className={styles.socialLink}>
                                <GitHub className={styles.socialIcon} />
                                <span className={styles.socialName}>GitHub</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="" target="_blank" className={styles.socialLink}>
                                <LinkedIn className={styles.socialIcon} />
                                <span className={styles.socialName}>LinkedIn</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="" target="_blank" className={styles.socialLink}>
                                <Instagram className={styles.socialIcon} />
                                <span className={styles.socialName}>Instagram</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
));

export default HomeContact;
