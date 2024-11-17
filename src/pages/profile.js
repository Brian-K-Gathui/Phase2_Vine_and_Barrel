import React from 'react';


export function Profile() {
    return (
        <div className="profile-container">
            <div className="profile-card">
                {/* <img src="profile_bw.png" alt="Admin Profile" className="profile-image" /> */}
                <h2 className="profile-name">Admin Name</h2>
                <p className="profile-role">Administrator</p>
                <div className="profile-info">
                    <div className="profile-item">
                        <span className="profile-key">Email:</span>
                        <span className="profile-value">admin@example.com</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-key">Phone:</span>
                        <span className="profile-value">+254 789 588 400</span>
                    </div>
                    <div className="profile-item">
                        <span className="profile-key">Role:</span>
                        <span className="profile-value">Administrator</span>
                    </div>
                </div>
                <button className="btn" id="addWineButton">Edit Profile</button>
            </div>
        </div>
    );
}
