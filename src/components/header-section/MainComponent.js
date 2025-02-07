import AnimatedImage from "./AnimatedImageComponent";
import {Link} from "react-router-dom";

const MainComponent = () => {
    return (
        <div className="hero_section_wrapper">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="home_1_hero-header_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large">
                                        <div className="margin-bottom margin-small">
                                            <h1 className="heading-style-h1">
                                                Управление финансами на основе ML - более разумные выводы, более
                                                эффективные решения
                                            </h1>
                                        </div>
                                        <p className="text-size-medium">
                                            Наше веб-приложение использует машинное обучение для анализа финансов,
                                            прогнозирования расходов и оптимизации бюджета. Автоматизируйте управление
                                            финансами, получайте персонализированные рекомендации и принимайте более
                                            взвешенные финансовые решения.
                                        </p>
                                        <div className="margin-top margin-medium">
                                            <div className="button-group is-center">
                                                <Link to="/log-in" className="button w-button">
                                                    Начать
                                                </Link>
                                                <a href="#Feature" className="button is-secondary w-button">
                                                    Узнать побольше
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AnimatedImage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;