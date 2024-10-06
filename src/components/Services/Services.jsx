import style from "./services.module.css"
import {Buttons} from "../Buttons/Buttons";
import {Title} from "../title/Title.jsx";


export const Services = () => {

    return (
        <section>
            <div className="container">
                <div className={style.services__wrapper}>
                    <Title name='Services'
                           title='My Photography Services'
                           link='View All Services'
                           btn={<Buttons/>} />
                    <div className={style.services__flex}>
                        <div className={style.services__content}>
                            <h3 className={style.services__contentTitle}>Events</h3>
                            <a href="#" className={style.services__link}></a>
                            <p className={style.services__contentText}>
                                Our event photography service is dedicated to capturing the magic of your special
                                occasions.
                                Whether it's a wedding, corporate event, or milestone celebration, we're there to
                                document every
                                heartfelt moment. We blend into the background, ensuring natural and candid shots that
                                reflect the emotions of the day.
                            </p>
                            <p className={style.services__listTitle}>Service Highlights</p>
                            <ul>
                                <li className={style.services__item}>Coverage for weddings, parties, corporate functions, and
                                    more.
                                </li>
                                <li className={style.services__item}>Skilled photographers who know how to seize the moment.
                                </li>
                                <li className={style.services__item}>A mix of candid and posed shots for a comprehensive
                                    story.
                                </li>
                                <li className={style.services__item}>A mix of candid and posed shots for a comprehensive
                                    story.
                                </li>
                            </ul>
                        </div>
                        <div className={style.services__bg}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};