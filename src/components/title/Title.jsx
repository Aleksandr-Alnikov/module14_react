import style from "./title.module.css"
import {Buttons} from "../Buttons/Buttons";


export const Title = ({name, title, link, btn, count, total}) => {

    return (
        <div className={style.wrapper}>
            <div>
                <p className={style.text}>{name}</p>
                <h2 className={style.title}>{title}</h2>
                {total && <p className={style.total}>{total}</p>}
                {count && <p className={style.count}>{count}</p>}
            </div>
            <div className={style.services__btnWrapper}>
                {btn && <Buttons />}
                <a href="#" className={style.link}>{link}</a>
            </div>
        </div>
    );
};