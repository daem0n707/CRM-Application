// src/App.js
import React from 'react';
import './App.css';

function App() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);

  return (
    <div className="App">
      <div className="sidebar">
        <div className="profile-pic"></div>
        <p className="profile-name">Xavier</p>
      </div>
      <div className="main-content">
        <div className="header">
          <h1>Admin Panel Dashboard</h1>
          <p>{formattedDate}</p>
          <button className="create-job">create job</button>
        </div>
        <div className="stats">
          <div className="stat-item">
            <p className="stat-title">new clients</p>
            <p className="stat-value">2 new clients</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">Jobs posted</p>
            <p className="stat-value">2 new clients</p>
          </div>
          <div className="stat-item">
            <p className="stat-title">Active jobs</p>
            <p className="stat-value">...</p>
          </div>
        </div>
        <div className="details">
          <div className="card clients">
            <h2>Clients</h2>
            <p className="time-period">this month</p>
            <div className="client-info">
              <div className="client-pic"></div>
              <div>
                <p className="client-name">sophie john</p>
                <p className="client-email">sopho@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="card expenses">
            <h2>Expenses</h2>
            <p className="time-period">this month</p>
            <div className="expense-info">
              <p className="job-name">Job Name</p>
              <p className="budget">$2,000</p>
              <p className="status active">active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
