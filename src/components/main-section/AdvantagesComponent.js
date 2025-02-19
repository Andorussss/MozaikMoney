import React from 'react';

const AdvantagesComponent = () => {
    const features = [
        {
            image: '/img/adv1.jpeg',
            title: 'Detailed Usage Analytics',
            description: 'provides in-depth analysis of financial data to help users track and optimise spending. Through the use of machine learning, the system identifies patterns in spending, predicts future financial trends and offers personalised recommendations. Data visualisation in easy-to-use charts and reports makes financial management intuitive and efficient.'
        },
        {
            image: '/img/adv2.jpeg',
            title: 'Enhance Workflow',
            description: 'enables you to automate and optimise financial management, reducing routine tasks and increasing efficiency. Intelligent algorithms analyse financial transactions, suggest the best budget management strategies and help you make informed decisions. Intuitive interface and integration with analytical tools simplify workflow, making financial management convenient and efficient.'
        },
        {
            image: '/img/adv3.jpeg',
            title: 'Generate ML Data',
            description: 'automatically collects and prepares financial data for training machine learning models. The system cleans, structures and analyses the data, creating quality sets for predictive analysis. This improves the accuracy of predictions, identifies hidden patterns, and enables better-informed financial decisions.'
        }
    ];

    return (
        <section id="Feature" className="section_home_3_how-it-works">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large">
                        <div className="home_3_how-it-works_component">
                            <div className="margin-bottom margin-xxlarge">
                                <div className="text-align-center">
                                    <div className="max-width-large">
                                        <h3 style={{transform: 'translate3d(0, 40px, 0)', opacity: 1}}>
                                            Optimize your finances with <span
                                            className="text-highlight">smart data</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-layout-grid home_3_how-it-works_list">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="home_3_how-it-works_item"
                                        style={{
                                            transform: 'translate3d(0, 40px, 0)',
                                            opacity: 1
                                        }}
                                    >
                                        <div className="margin-bottom margin-medium">
                                            <div className="home_3_how-it-works_image-wrapper">
                                                <img
                                                    src={feature.image}
                                                    loading="lazy"
                                                    width="405"
                                                    alt="Frame"
                                                    className="home_3_how-it-works_image"
                                                />
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-xsmall">
                                            <h3 className="heading-style-h5">{feature.title}</h3>
                                        </div>
                                        <p>{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdvantagesComponent;