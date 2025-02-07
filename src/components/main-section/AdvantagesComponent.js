import React from 'react';

const AdvantagesComponent = () => {
    const features = [
        {
            image: 'https://cdn.prod.website-files.com/665ea5103f6c57320a761443/666ede78d9d28b4d49aac8ba_Service_Frame_1.png',
            title: 'Detailed Usage Analytics',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
        },
        {
            image: 'https://cdn.prod.website-files.com/665ea5103f6c57320a761443/666ede78d9d28b4d49aac8ba_Service_Frame_1.png',
            title: 'Enhance Workflow',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
        },
        {
            image: 'https://cdn.prod.website-files.com/665ea5103f6c57320a761443/666eae9139fff200090f914f_Service_Frame_3.png',
            title: 'Generate AI Data',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.'
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
                                        <h3 style={{ transform: 'translate3d(0, 40px, 0)', opacity: 1 }}>
                                            Оптимизируйте свои финансы с помощью  <span className="text-highlight">интеллектуальных данных</span>
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