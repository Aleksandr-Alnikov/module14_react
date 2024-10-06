import style from "./burger.module.css"
import {NavLink} from "react-router-dom";


export const Burger = ({menu}) => {

    return (
        <div className={style.wrapper} onClick={menu}>
            <nav className={style.navigation}>
                <div className={style.list}>
                    <NavLink className={style.item} to={'/'}>Home</NavLink>
                    <NavLink className={style.item} to={'/about'}>About me</NavLink>
                    <NavLink className={style.item} to={'/portfolio'}>Portfolio</NavLink>
                    <NavLink className={style.item} to={'/services'}>Services</NavLink>
                </div>
            </nav>
            <button className={style.btn}>Contact Me</button>
        </div>
    );
};