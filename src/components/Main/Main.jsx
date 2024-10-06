import {Hero} from "../Hero/Hero.jsx";
import {AboutPage} from "../../Pages/AboutPage/AboutPage.jsx";
import {About} from "../About/About.jsx";
import {Services} from "../Services/Services.jsx";
import {Portfolio} from "../Portfolio/Portfolio.jsx";
import {Faq} from "../Faq/Faq.jsx";
import {Reviews} from "../Reviews/Reviews.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import {ServicesPage} from "../../Pages/ServicesPage/ServicesPage";
import {PortfolioPage} from "../../Pages/PortfolioPage/PortfolioPage";


export const Main = () => {
    const location = useLocation();

    return (
        <main>
            {location.pathname === '/' && (
                <>
                    <Hero />
                    <About />
                    <Services />
                    <Portfolio />
                    <Faq />
                    <Reviews />
                </>
            )}

            <Routes>
                <Route exact path={'/'} />
                <Route  path={'/about'} element={<AboutPage />} />
                <Route  path={'/services'} element={<ServicesPage />} />
                <Route  path={'/portfolio'} element={<PortfolioPage />} />
            </Routes>
        </main>
    );
};