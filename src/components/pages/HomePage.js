import BackgroundComponent from "../header-section/BackgroundComponent";
import NavbarSection from "../header-section/NavbarSection";
import MainComponent from "../header-section/MainComponent";
import AdvantagesComponent from "../main-section/AdvantagesComponent";
import TransactionComponent from "../main-section/TransactionComponent";
import FeaturesComponent from "../main-section/FeaturesComponent";
import FAQComponent from "../main-section/FAQComponent";
import FooterSection from "../main-section/FooterSection";

const HomePage = () => {
    return (
        <div>
            <main>
                <header className="section_home_1_hero-header">
                    <BackgroundComponent />
                    <NavbarSection />
                    <MainComponent />
                </header>
                <AdvantagesComponent />
                <TransactionComponent />
                <FeaturesComponent />
                <FAQComponent />
            </main>
            <FooterSection />
        </div>
    );

};

export default HomePage;