
import style from "./header.module.css"
import {NavLink} from "react-router-dom";
import {useState} from "react";
import {Burger} from "../Burger/Burger";
import {SwitchTheme} from "../Theme/Theme";


export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleBurger = () => {
        console.log('fff')
        setIsOpen(!isOpen);
    };

    return (
        <header className={style.header}>
            <SwitchTheme />
            <div className="container">
                                <div className={style.header__wrapper}>
                    <span className={style.header__logo}>DAMIEN</span>
                    <button className={style.header__burger} onClick={handleBurger}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5 7.875C3.5 7.39175 3.89175 7 4.375 7H23.625C24.1082
                             7 24.5 7.39175 24.5 7.875C24.5 8.35825 24.1082 8.75 23.625 8.75H4.375C3.89175 8.75 3.5 8.35825 3.5
                             7.875ZM3.5 14C3.5 13.5168 3.89175 13.125 4.375 13.125H23.625C24.1082 13.125 24.5 13.5168 24.5
                             14C24.5 14.4832 24.1082 14.875 23.625 14.875H4.375C3.89175 14.875 3.5 14.4832 3.5 14ZM13.125
                             20.125C13.125 19.6418 13.5168 19.25 14 19.25H23.625C24.1082 19.25 24.5 19.6418 24.5 20.125C24.5
                             20.6082 24.1082 21 23.625 21H14C13.5168 21 13.125 20.6082 13.125 20.125Z" fill="white"/>
                        </svg>
                    </button>
                    {isOpen && <Burger menu={handleBurger} />}
                    <nav className={style.header__navigation}>
                        <div className={style.header__navigationList}>
                            <NavLink className={style.header__navigationItem} to={'/'}>Home</NavLink>
                            <NavLink className={style.header__navigationItem} to={'/about'}>About me</NavLink>
                            <NavLink className={style.header__navigationItem} to={'/portfolio'}>Portfolio</NavLink>
                            <NavLink className={style.header__navigationItem} to={'/services'}>Services</NavLink>
                        </div>
                    </nav>
                    <button className={style.header__btn}>Contact Me</button>
                </div>
            </div>
        </header>
    );
};