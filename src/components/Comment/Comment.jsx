import style from "./commend.module.css"
import {Social} from "../Social/Social.jsx";


export const Comment = ({item}) => {

    return (
        <li className={style.item}>
            <article>
                <div className={style.social}>
                    <div>
                        <h4 className={style.title}>{item.name}</h4>
                        <p className={style.address}>{item.location}</p>
                    </div>
                    <Social />
                </div>
                <div className={style.reviews__star}>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                    <span className={style.star}></span>
                </div>
                <p className={style.content}>{item.description}</p>
            </article>
        </li>
    );
};