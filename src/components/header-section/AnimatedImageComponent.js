import { useEffect, useRef, useState } from "react";

const AnimatedImage = () => {
    const imgWrapperRef = useRef(null);
    const [rotation, setRotation] = useState(52);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (animationFrameRef.current) {
                    cancelAnimationFrame(animationFrameRef.current);
                }

                animationFrameRef.current = requestAnimationFrame(() => {
                    const newRotation = 40 - entry.intersectionRatio * 40;
                    setRotation(newRotation);
                });
            },
            { threshold: Array.from({ length: 8 }, (_, i) => 0.3 + i * 0.1) }
        );

        if (imgWrapperRef.current) {
            observer.observe(imgWrapperRef.current);
        }

        return () => {
            observer.disconnect();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={imgWrapperRef}
            className="home_1_hero-header_image-wrapper"
            style={{
                transform: `rotateX(${rotation}deg) translate3d(0px, 0px, 0px) `,
                transition: "transform 0.6s ease-out",
            }}
        >
            <img
                alt="ups"
                src="/img/section1-anim.png"
                className="home_1_hero-header_image"
            />
        </div>
    );
};

export default AnimatedImage;
