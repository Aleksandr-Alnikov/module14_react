import style from "./line.module.css"


export const Line = () => {

    return (
        <div className={style.animation}>
            <ul className={style.list}>
                <li className={style.item}>Event Photography</li>
                <li className={style.item}>Comercial Photography</li>
                <li className={style.item}>Wedding Photography</li>
                <li className={style.item}>Landscape Photography</li>
                <li className={style.item}>Branding Photography</li>
                <li className={style.item}>Product Photography</li>
                <li className={style.item}>Portrait Photography</li>
            </ul>
            <ul className={style.list}>
                <li className={style.item}>Event Photography</li>
                <li className={style.item}>Comercial Photography</li>
                <li className={style.item}>Wedding Photography</li>
                <li className={style.item}>Landscape Photography</li>
                <li className={style.item}>Branding Photography</li>
                <li className={style.item}>Product Photography</li>
                <li className={style.item}>Portrait Photography</li>
            </ul>
        </div>
    );
};