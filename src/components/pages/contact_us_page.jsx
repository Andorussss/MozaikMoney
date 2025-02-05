import React from 'react';
import './ContactUsPage.css'
const ContactUsPage = () => {
    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <form>
                <div className="input-container">
                    <input type="text" placeholder="First name" required/>
                        <input type="text" placeholder="Last name" required/>
                </div>
                <div className="input-container">
                    <input type="email" placeholder="Email" required/>
                        <input type="tel" placeholder="Phone number"/>
                </div>
                <select required>
                    <option value="" disabled selected>Choose a topic</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                </select>
                <textarea placeholder="Type your message..." required></textarea>
                <div className="checkbox-container">
                    <input type="checkbox" className="checkbox-block" required/>
                    <label>
                        <a href="#" className="checkbox-link">I accept the Terms</a>
                    </label>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUsPage;