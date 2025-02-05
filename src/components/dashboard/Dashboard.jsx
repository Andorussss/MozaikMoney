import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import './dashboard.css';
const data = [
    { name: 'Jan', income: 40001, outcome: 34001 },
    { name: 'Feb', income: 13000, outcome: 21398 },
    { name: 'Mar', income: 35000, outcome: 53000 },
    { name: 'Apr', income: 35100, outcome: 12800 },
    { name: 'May', income: 18001, outcome: 41900 },
    { name: 'Jun', income: 52001, outcome: 31001 },
    { name: 'Jul', income: 27001, outcome: 27001 },
    { name: 'Aug', income: 50900, outcome: 31950 },
];

const Dashboard = () => (
    <div className="dashboard">
        <div className="left-navbar">
            <div className="logo">
                <span className="logo-icon">$</span>
                <span className="logo-text">AI Financial</span>
            </div>
            <nav>
                <ul>
                    <li><button className="new-dashboard-button">+ New Dashboard</button></li>
                    <li><Link to="/wallets">My Wallets</Link></li>
                    <li><Link to="/account">Account</Link></li>
                    <li><Link to="/tools">Tools</Link></li>
                </ul>
            </nav>
            <button className="logout">Log Out</button>
        </div>
        <div className="content">
            <div className="top-bar">
                <h2>Welcome back, Sara</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/6858/6858485.png" alt="Avatar" className="top-bar-avatar" />
            </div>
            <div className="panels-block">
                <div className="panel income">
                    <img src="https://www.svgrepo.com/show/521472/arrow-income.svg" alt="Income" className="panel-icon panel-icon-i" />
                    <div className="total-amount-block">
                        <h3>Total Income</h3>
                        <p className="amount">$1632.000</p>
                    </div>
                    <span className="change positive">+1.29%</span>
                </div>
                <div className="panel outcome">
                    <img src="https://www.svgrepo.com/show/521472/arrow-income.svg" alt="Outcome" className=" panel-icon panel-icon-o" />
                    <div className="total-amount-block">
                        <h3>Total Outcome</h3>
                        <p className="amount">$632.000</p>
                    </div>
                    <span className="change negative">-1.29%</span>
                </div>
                <div className="panel balance">
                    <img src="https://static-00.iconduck.com/assets.00/dollar-circle-icon-2048x2048-65nmgjtu.png" alt="Balance" className="panel-icon panel-icon-b" />
                    <div className="total-amount-block">
                        <h3>Balance</h3>
                        <p className="amount">$15432.000</p>
                    </div>
                </div>
            </div>
            <div className="chart-container">
                <div className="chart-header">
                    <h3>Analytics</h3>
                    <div>
                        <h5>
                            <span className="pos">•</span>
                            Income
                        </h5>
                    </div>
                    <div>
                        <h5>
                            <span className="neg">•</span>
                            Outcome
                        </h5>
                    </div>

                    <select className="year-selector">
                        <option value="2024">2024</option>
                        <option value="2023">2023</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="1 3" stroke="#4e4c56" />
                        <XAxis dataKey="name" stroke="#777474" axisLine={false} />
                        <YAxis
                            stroke="#777474"
                            axisLine={false}
                            tickFormatter={(tick) => `${tick}k`}
                        />
                        <Tooltip wrapperStyle={{ backgroundColor: "#0b2625", color: "#ffffff" }} />
                        <Bar
                            dataKey="income"
                            fill="#00c49f"
                            radius={[20, 20, 0, 0]}
                            barSize={15}
                        />
                        <Bar
                            dataKey="outcome"
                            fill="#0088FE"
                            radius={[20, 20, 0, 0]}
                            barSize={15}
                        />
                    </BarChart>
                </ResponsiveContainer>

            </div>
        </div>
    </div>
);

export default Dashboard;
