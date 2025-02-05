import React from 'react';

import './dashboard.css';

const Dashboard = () => (
    <div className="dashboard">
        <div className="income">
            <h3>Total Income</h3>
            <p>$1632.000</p>
            <p>+1.29%</p>
        </div>
        <div className="outcome">
            <h3>Total Outcome</h3>
            <p>$632.000</p>
            <p>+1.29%</p>
        </div>
        <div className="balance">
            <h3>Balance</h3>
            <p>$15432.000</p>
        </div>
        <div className="barchart">
            {/* Место для вашей диаграммы */}
        </div>
        <div className="sidebar">
            <button>New Dashboard</button>
            <button>My Wallets</button>
            <button>Account</button>
            <button>Tools</button>
            <button>Log Out</button>
        </div>
    </div>
);

export default Dashboard;
