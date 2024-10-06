import style from "./theme.module.css"
import {useContext} from "react";
import {ThemeContext} from "../../App.jsx";

export const SwitchTheme = () => {

    const currentTheme = useContext(ThemeContext);

    const handleClick = () => {
        if (currentTheme.theme === 'dark') {
            currentTheme.setTheme('light');
        } else {
            currentTheme.setTheme('dark');
        }
    };

    return (
        <button className={style.btn} onClick={handleClick}>{currentTheme.theme}</button>
    );
};