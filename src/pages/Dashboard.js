import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css'; // Importing the CSS file
import { PieChart, Pie, Cell, Legend } from 'recharts';
import userIcon from '../Icons/user.png';
import moon from '../Icons/moon.png';
import leader from '../Icons/leader.png';
import check from '../Icons/check.png';
import Sidebar from '../components/Sidebar'; // Import the Sidebar
import axios from '../utils/axios'; // Import axios for API calls

// Colors for pie chart segments
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [accountStatusData, setAccountStatusData] = useState([]);
  const [accountTypeData, setAccountTypeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
        processUserData(response.data); // Process the user data
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const processUserData = (data) => {
    const activeCount = data.filter(user => user.accountStatus === 'Active').length;
    const inactiveCount = data.length - activeCount;

    // Set account status data for the chart
    setAccountStatusData([
      { name: 'Active', value: activeCount, color: '#0088FE' },
      { name: 'Inactive', value: inactiveCount, color: '#00C49F' },
    ]);

    // Assuming accountType is a field in user data
    const personalCount = data.filter(user => user.accountType === 'Personal').length;
    const businessCount = data.filter(user => user.accountType === 'Business').length;

    // Set account type data for the chart
    setAccountTypeData([
      { name: 'Personal Accounts', value: personalCount },
      { name: 'Business Accounts', value: businessCount },
    ]);
  };

  if (loading) {
    return <div>Loading...</div>; // Simple loading state
  }

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
            <h3><img src={check} alt="Active Icon" /> {accountStatusData[0]?.value || 0}+ Active Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={moon} alt="Inactive Icon" /> {accountStatusData[1]?.value || 0}+ Inactive Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={userIcon} alt="Personal Icon" /> {accountTypeData[0]?.value || 0}+ Personal Accounts</h3>
          </div>
          <div className="account-card">
            <h3><img src={leader} alt="Business Icon" /> {accountTypeData[1]?.value || 0}+ Business Accounts</h3>
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
                  paddingAngle={5}
                  dataKey="value"
                >
                  {accountStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </div>

            {/* % of Account Type Pie Chart */}
            <div className="chart-box">
              <h3>% of Account Type</h3>
              <div className="two-charts">
                {accountTypeData.map((entry, index) => (
                  <div className="mini-chart" key={index}>
                    <PieChart width={120} height={120}>
                      <Pie
                        data={[entry]}
                        cx={60}
                        cy={60}
                        innerRadius={40}
                        outerRadius={50}
                        fill={COLORS[index]}
                        paddingAngle={5}
                        dataKey="value"
                      />
                    </PieChart>
                    <span>{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress List */}
        <div className="progress-list">
          <h3>Top Accounts</h3>
          <div className="top-accounts">
            {/* You can replace this with real user progress data */}
            {users.slice(0, 3).map(user => (
              <div className="progress-item" key={user.email}>
                <span>{user.fullname}</span>
                <span>Progress: {user.progress || 0}%</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${user.progress || 0}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
