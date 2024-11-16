import React from 'react';
import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="hero-section">
                <h1>Welcome Back to Vine & Barrel</h1>
                <p>
                    Hello, Admin! We're excited to have you here. Take control of our wine inventory with ease – 
                    browse, update, and manage our excellent wine collection effortlessly. Let's get started!
                </p>
                <Link to="/admin/products">
                    <button className="btn" id="addWineButton">Manage Wine Inventory</button>
                </Link>
            </div>
        </div>
    );
}
