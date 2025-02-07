import React, {useEffect} from 'react';

const BackgroundComponent = () => {
    useEffect(() => {
        const restartAnimation = () => {
            document.querySelectorAll('.box').forEach(box => {
                box.style.animation = 'none';
                void box.offsetWidth;
                box.style.animation = 'diagonalFlow 5s linear infinite';
            });
        };
        restartAnimation();
    }, []);
    const boxIds = [
        "part-1", "part-2", "part-3", "part-4", "part-5", "part-6", "part-7"
    ];

    return (
        <div className="background-hero">
            <div className="box"></div>
            {boxIds.map((id) => (
                <div key={id} id={id} className="box"></div>
            ))}
        </div>
    );
};

export default BackgroundComponent;