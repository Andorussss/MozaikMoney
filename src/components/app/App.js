import NavbarSection from "../header-section/NavbarSection";
import BackgroundComponent from "../header-section/BackgroundComponent";
import MainComponent from "../header-section/MainComponent";
import TransactionComponent from "../main-section/TransactionComponent";
import FeaturesComponent from "../main-section/FeaturesComponent";
import FAQComponent from "../main-section/FAQComponent";
import AdvantagesComponent from "../main-section/AdvantagesComponent";

function App() {
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
        </div>
    );
}

export default App;