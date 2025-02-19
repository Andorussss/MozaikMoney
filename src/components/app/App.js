import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/SignUpPage";
import ContactUs from "../pages/ContactUs";
import MainPage from "../pages/MainPage";
import PrivateRoute from "./PrivateRoute";

function App() {
    return (
        <Router>
            <div className="App">
                <main className="main">
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/log-in" element={<LoginPage/>}/>
                        <Route path="/contact-us" element={<ContactUs/>}/>
                        <Route path="/main" element={
                            <PrivateRoute>
                                <MainPage />
                            </PrivateRoute>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
