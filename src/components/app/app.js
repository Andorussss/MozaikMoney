import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import {
    HomePage, PrivacyPolicyPage,
    AboutUsPage, SignUpPage,ContactUsPage
} from '../pages';
import Header from "../header";
import Footer from "../footer";
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import ErrorBoundary from "../error-boundary";

const App = () => {
    const [hasError, setHasError] = useState(false);

    return (
        <ErrorBoundary>
            <div className={'App'}>
                <Header/>
                <main className="main">
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="/sign-up" element={<SignUpPage/>}/>
                        <Route path="/contact-us" element={<ContactUsPage/>}/>
                        <Route path="/privacy-policy" element={<PrivacyPolicyPage/>}/>
                        <Route path="/about-us" element={<AboutUsPage/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
        </ErrorBoundary>
    );
};

export default App;