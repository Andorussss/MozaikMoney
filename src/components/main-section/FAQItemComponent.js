import { useState, useRef, useEffect } from "react";

const FAQItemComponent = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
    const [height, setHeight] = useState("0px");

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className="home_10_faq_accordion">
            <div onClick={() => setIsOpen(!isOpen)} className="home_10_faq_question">
                <div className="text-size-medium text-weight-bold">{question}</div>
                <div className="home_10_faq_icon-wrappper">
                    <div
                        className="icon-embed-small w-embed"
                        style={{
                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                            transition: "transform 0.3s ease-in-out"
                        }}
                    >
                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M25.3333 15.667V16.336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div
                ref={contentRef}
                className="home_10_faq_answer"
                style={{
                    maxHeight: height,
                    transition: "max-height 0.4s ease-in-out",
                    overflow: "hidden",
                }}
            >
                <div className="margin-bottom margin-small">
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default FAQItemComponent;
