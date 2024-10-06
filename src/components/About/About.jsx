import style from "./about.module.css"
import {Social} from "../Social/Social";
import {Title} from "../title/Title";



export const About = () => {

    return (
        <section>
            <div className="container">
                <div className={style.about__wrapper}>
                    <Title name='ABOUT'
                           title='I AM DAMIEN'
                           link='Know More' />
                    <div className={style.about__wrapperContacts}>
                        <div className={style.about__bg}></div>
                        <div className={style.about__contactsBox}>
                            <h3 className={style.about__contactsTitle}>Introduction</h3>
                            <p className={style.about__contactsText}>
                                My journey as a photographer has been a lifelong quest to capture the extraordinary in
                                the ordinary,
                                to freeze fleeting moments in time, and to share the world's beauty as I see it. Based
                                in the enchanting
                                landscapes of the USA, I find inspiration in every corner of this diverse and vibrant
                                country.
                                Join me as we embark on a visual odyssey, where each photograph tells a story, and every
                                frame
                                is a piece of my heart.
                            </p>
                            <h3 className={style.about__contactsTitle}>Contact Information</h3>
                            <div className={style.about__contactsAddress}>
                                <address>
                                    <p>Email</p>
                                    <a href="mailto:damienbraun@gmail.com">damienbraun@gmail.com</a>
                                </address>
                                <address>
                                    <p>Phone Number</p>
                                    <a href="tel:+00000000000">+00 000000000</a>
                                </address>
                            </div>
                            <div className={style.about__social}>

                                <Social />
                                <div className={style.about__socialBtnBox}>
                                    <button className={style.about__socialBtn}>Let’s Work</button>
                                    <button className={style.about__socialBtn}>Download CV</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};