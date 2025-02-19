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
                                                ML-based financial management - smarter conclusions, better decisions
                                            </h1>
                                        </div>
                                        <p className="text-size-medium">
                                            Our web application uses machine learning to analyze finances, predict
                                            spending and optimize your budget. Automate your financial management, get
                                            personalized recommendations and make better financial decisions.
                                        </p>
                                        <div className="margin-top margin-medium">
                                            <div className="button-group is-center">
                                                <Link to="/log-in" className="button w-button">
                                                    Start journey
                                                </Link>
                                                <a href="#Feature" className="button is-secondary w-button">
                                                    More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <AnimatedImage/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;