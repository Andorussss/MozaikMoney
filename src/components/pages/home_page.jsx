import React, {useEffect, useState} from 'react';
import './LandingPage.css';
import DB from '../../gamesDB'
const HomePage = () => {
    const initialGames=DB;
    const [filteredGames, setFilteredGames] = useState(initialGames);
    const [filter, setFilter] = useState('Скидки');

    useEffect(() => {
        const newFilteredGames = initialGames.filter((game) => game.category === filter);
        setFilteredGames(newFilteredGames);
    }, [filter]);

    return (
        <div className="HomeContainer">
            <div className="textContainer">
                <h1 className="title">Revolutionize Your Financial Management with AI-Powered Decision</h1>
                <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
            <div class="buttons">
                <button class="button get-started">Get Started</button>
                <button class="button learn-more">Learn More</button>
            </div>
        </div>
    );
};

export default HomePage;