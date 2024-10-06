import style from "./footer.module.css"
import {Social} from "../Social/Social";
import {Line} from "../Line/Line";


export const Footer = () => {

    return (
        <>
            <footer className={style.footer}>
                <div className={`${style.footer__container} ${style.container}`}>
                    <div className={style.footer__wrapper}>
                        <span className={style.footer__bg}></span>
                    </div>
                </div>
                <Line />
                <div className="container">
                    <div className={style.footer__wrapper}>
                        <div className={style.footer__box}>
                            <div className={style.footer__boxTitle}>
                                <p className={style.footer__text}>A more meaningful home for photography</p>
                                <div className={style.footer__boxItem}>
                                    <p className={style.footer__textTitle}>Let’s</p>
                                    <a href="#" className={style.footer__link}></a>
                                    <p className={style.footer__textTitle}>Work Together</p>
                                </div>
                            </div>
                            <div className={style.footer__boxList}>
                                <ul>
                                    <li className={style.footer__item}>Home</li>
                                    <li className={style.footer__item}>About Me</li>
                                    <li className={style.footer__item}>My Works</li>
                                    <li className={style.footer__item}>Testimonials</li>
                                </ul>
                                <ul>
                                    <li className={style.footer__item}>Clients</li>
                                    <li className={style.footer__item}>Klovesto</li>
                                    <li className={style.footer__item}>Nukeway</li>
                                    <li className={style.footer__item}>Cloven’s</li>
                                    <li className={style.footer__item}>MenVol</li>
                                </ul>
                                <ul>
                                    <li className={style.footer__item}>Portfolio</li>
                                    <li className={style.footer__item}>Events</li>
                                    <li className={style.footer__item}>Portrait</li>
                                    <li className={style.footer__item}>Branding</li>
                                    <li className={style.footer__item}>Commerciale</li>
                                    <li className={style.footer__item}>Wedding</li>
                                </ul>
                                <ul>
                                    <li className={style.footer__item}>Portfolio</li>
                                    <li className={style.footer__item}>Services</li>
                                    <li className={style.footer__item}>Events</li>
                                    <li className={style.footer__item}>Portraits</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className={style.footer__copyright}>
                <p className={style.footer__copyrightText}>Terms & Conditions</p>
                    <Social />
                <p className={style.footer__copyrightText}>© 2024 Damien Braun Photography. All rights reserved.</p>
            </div>
        </>
    );
};