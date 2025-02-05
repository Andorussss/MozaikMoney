import React, {useEffect, useState} from 'react';
import './Page.css';
import PartnersBlock from '../partnersBlock/PartnersBlock';
import Dashboard from "../dashboard";
const HomePage = () => {
    return (
        <div className="home-page">
            <div className="global-padding-container">
                <div className="textContainer">
                    <h1 className="title">Revolutionize Your Financial Management with AI-Powered Decision</h1>
                    <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                <div className="buttons">
                    <button className="button get-started">Get Started</button>
                    <button className="button learn-more">Learn More</button>
                </div>
            </div>

            <PartnersBlock/>
            <Dashboard/>
        </div>

    );
};

export default HomePage;