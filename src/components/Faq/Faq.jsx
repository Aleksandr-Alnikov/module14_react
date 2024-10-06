import style from "./faq.module.css"


export const Faq = () => {

    return (
        <section>
            <div className="container">
                <div className={style.faq__wrapper}>
                    <div className={style.faq__wrapperBox}>
                        <div>
                            <p className={style.faq__text}>FAQ’s</p>
                            <h2 className={style.faq__title}>Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <ul className={style.faq__list}>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>What type of photography do you specialize in?</button>
                            <p className={`${style.faq__itemText} ${style.active}`}>I specialize in [Portrait, Landscape, Event, etc.]
                                photography, capturing moments that tell unique stories.</p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>How can I book a photography session with you?</button>
                            <p className={style.faq__itemText}></p>

                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>What equipment do you use for your photography?</button>
                            <p className={style.faq__itemText}></p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>Can I request a specific location for a</button>
                            <p className={style.faq__itemText}></p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>What is your editing process like?</button>
                            <p className={style.faq__itemText}></p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>Are digital files included in your photography packages?
                            </button>
                            <p className={`${style.faq__itemText} ${style.active}`}>Yes, prints are available for purchase. Explore the
                                'Prints' section for more details on sizes and pricing.</p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>Do you offer prints of your photographs?</button>
                            <p className={style.faq__itemText}></p>
                        </li>
                        <li className={style.faq__item}>
                            <button className={style.faq__btn}>How long does it take to receive the edited photos after a
                                session?
                            </button>
                            <p className={style.faq__itemText}></p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};