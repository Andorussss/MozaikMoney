import FAQItemComponent from "./FAQItemComponent";
import {Link} from "react-router-dom";

const FAQComponent = () => {
    const faqs = [
        { question: "Первый вопрос", answer: "Ответ..." },
        { question: "Второй?", answer: "Ответ..." },
    ];

    return (
        <section className="section_home_10_faq">
            <div className="padding-global">
                <div className="container-small">
                    <div className="padding-section-large">
                        <div className="margin-bottom margin-xxlarge text-align-center">
                            <div className="max-width-large">
                                <h2>FAQs</h2>
                                <p className="text-size-medium">Вопросы есть?</p>
                            </div>
                        </div>
                        <div className=" w-layout-grid home_10_faq_list">
                            {faqs.map((faq, index) => (
                                <FAQItemComponent key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                        <div className="margin-top margin-xxlarge text-align-center">
                            <div className="max-width-medium align-center">
                                <h3 className="heading-style-h4">Still have questions?</h3>
                                <p className="text-size-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <div className="margin-top margin-medium">
                                    <Link to="/contact-us" className="button is-secondary w-button">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQComponent;