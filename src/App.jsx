import './App.css'
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main.jsx";
import {Footer} from "./components/Footer/Footer";
import {createContext, useState} from "react";


export const ThemeContext = createContext(null)

function App() {
    const [theme, setTheme] = useState('dark');

  return (
    <div className={theme}>
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Header />
            <Main />
            <Footer />
        </ThemeContext.Provider>
    </div>
  );
}

export default App;
