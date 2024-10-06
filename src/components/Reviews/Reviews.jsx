import style from "./reviews.module.css"
import {Title} from "../title/Title.jsx";
import {Buttons} from "../Buttons/Buttons.jsx";
import data from "../../../reviews.json"
import {Comment} from "../Comment/Comment";



export const Reviews = () => {

    return (
        <section>
            <div className="container">
                <div className={style.reviews__wrapper}>
                    <Title name='Testimonials'
                           title='What My Clients Say'
                           total='Total Reviews'
                           count={data.length}
                           link='View All Works'
                           btn={<Buttons />} />
                    <ul className={style.reviews__list}>
                        {data.map(item => {
                            return <Comment key={item.id}
                                            item={item} />
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};