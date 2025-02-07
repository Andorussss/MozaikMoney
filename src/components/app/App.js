import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/SignUpPage";
import ContactUs from "../pages/ContactUs";

function App() {
    return (
        <Router>
            <div className="App">
                <main className="main">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/log-in" element={<LoginPage />} />
                        <Route path="/contact-us" element={<ContactUs />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
