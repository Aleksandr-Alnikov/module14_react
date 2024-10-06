import style from "./hero.module.css"
import {Line} from "../Line/Line";

export const Hero = () => {

    return (
        <section className={style.hero}>
            <div className="container">
                <div className={style.hero__wrapper}>
                    <div className={style.hero__box}>
                        <p className={style.hero__titleText}>Stunning Photography by</p>
                        <h1 className={style.hero__title}>Damien Braun</h1>
                    </div>
                    <div className={style.hero__box}>
                        <p className={style.hero__text}>Let’s</p>
                        <a href="#" className={style.hero__link}></a>
                        <p className={style.hero__text}>Work Together</p>
                    </div>
                </div>
            </div>
            <Line />
            <div className="container">
                <div className={style.hero__wrapperBg}>
                    <div className={style.hero__bg}></div>
                </div>
            </div>
        </section>
    );
};