import React from 'react';
import '../styles/Dashboard.css'; // Importing the CSS file
import { PieChart, Pie, Cell, Legend } from 'recharts';
import userIcon from '../Icons/user.png';
import moon from '../Icons/moon.png';
import leader from '../Icons/leader.png';
import check from '../Icons/check.png';
import Sidebar from '../components/Sidebar'; // Import the Sidebar

// Sample data for the charts
const accountStatusData = [
  { name: 'Active', value: 60, color: '#0088FE' },
  { name: 'Inactive', value: 40, color: '#00C49F' },
];

const COLORS = ['#0088FE', '#00C49F'];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className='Sidebar'><Sidebar /></div>
      <div className="main-content">
        <div className='userName'>
          <h4>Welcome, Jason</h4>
          <img src={userIcon} alt="ProfilePicture" />
        </div>

        {/* Search bar */}
        <div className="search-container">
          <input type="text" placeholder="Search for user account" />
          <button className="search-button">Search</button>
        </div>

        {/* Account Stats */}
        <div className="account-stats">
          <div className="account-card">
            <h3><img src={check} alt="Active Icon" /> 1000+ Active Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={moon} alt="Inactive Icon" /> 1000+ Inactive Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={userIcon} alt="Personal Icon" /> 1000+ Personal Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={leader} alt="Business Icon" /> 1000+ Business Accounts</h3>
          </div>
        </div>

        {/* Charts Section */}
        <div className="chart-container">
          <div className="chart-section">
            <div className="chart-box">
              <h3>Accounts Status</h3>
              <PieChart width={250} height={250}>
                <Pie
                  data={accountStatusData}
                  cx={"50%"}
                  cy={"50%"}
                  innerRadius={50}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {accountStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>

            {/* % of Account Type Pie Chart */}
            <div className="chart-box">
              <h3>% of Account Type</h3>
              <div className="two-charts">
                <div className="mini-chart">
                  <PieChart width={120} height={120}>
                    <Pie
                      data={[{ name: 'Personal Account', value: 80 }]}
                      cx={60}
                      cy={60}
                      innerRadius={40}
                      outerRadius={50}
                      fill="#0088FE"
                      paddingAngle={5}
                      dataKey="value"
                    />
                  </PieChart>
                  <span>Personal Account</span>
                </div>

                <div className="mini-chart">
                  <PieChart width={120} height={120}>
                    <Pie
                      data={[{ name: 'Business Account', value: 20 }]}
                      cx={60}
                      cy={60}
                      innerRadius={40}
                      outerRadius={50}
                      fill="#00C49F"
                      paddingAngle={5}
                      dataKey="value"
                    />
                  </PieChart>
                  <span>Business Account</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress List */}
        <div className="progress-list">
          <h3>Top Accounts</h3>
          <div className="top-accounts">
            <div className="progress-item">
              <span>Nancy Osama</span>
              <span>Progress: 95%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="progress-item">
              <span>Nancy Osama</span>
              <span>Progress: 80%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress-item">
              <span>Nancy Osama</span>
              <span>Progress: 65%</span>
              <div className="progress-bar">
                <div className="progress" style={{ width: '65%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Corrected export statement
