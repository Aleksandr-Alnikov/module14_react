import style from "./portfolio.module.css"
import {Title} from "../title/Title.jsx";
import {Buttons} from "../Buttons/Buttons.jsx";
import img1 from "../../img/1.jpg"
import img2 from "../../img/2.jpg"
import img3 from "../../img/3.jpg"


export const Portfolio = () => {

    return (
        <section>
            <div className="container">
                <div className={style.portfolio__wrapper}>
                    <Title name='Portfolio'
                           title='Explore My photography work.'
                           link='View All Works'
                           btn={<Buttons/>} />
                    <ul className={style.portfolio__list}>
                        <li>
                            <article>
                                <img className={style.portfolio__img} src={img1} alt="Faces of Resilience" />
                                    <div className={style.portfolio__box}>
                                        <div>
                                            <h4 className={style.portfolio__titleItem}>Faces of Resilience</h4>
                                            <p className={style.portfolio__date}>March 2022</p>
                                        </div>
                                        <a href="#" className={style.portfolio__link}>View Project</a>
                                    </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img className={style.portfolio__img} src={img2} alt="A Wedding Tale" />
                                    <div className={style.portfolio__box}>
                                        <div>
                                            <h4 className={style.portfolio__titleItem}>A Wedding Tale</h4>
                                            <p className={style.portfolio__date}>January 2020</p>
                                        </div>
                                        <a href="#" className={style.portfolio__link}>View Project</a>
                                    </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <img className={style.portfolio__img} src={img3} alt="Product Elegance" />
                                    <div className={style.portfolio__box}>
                                        <div>
                                            <h4 className={style.portfolio__titleItem}>Product Elegance</h4>
                                            <p className={style.portfolio__date}>January 2020</p>
                                        </div>
                                        <a href="#" className={style.portfolio__link}>View Project</a>
                                    </div>
                            </article>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};