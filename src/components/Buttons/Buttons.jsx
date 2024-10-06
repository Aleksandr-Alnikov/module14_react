import style from "./buttons.module.css"


export const Buttons = () => {

    return (
        <div className={style.btnBox}>
            <button className={style.btn__left}></button>
            <button className={style.btn__right}></button>
        </div>
    );
};