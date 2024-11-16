import React from 'react';

export function ContactUs() {
    return (
        <div className="container my-4">
            <div className="contact-us-section">
                <h2>Contact Support</h2>
                <p>
                    Dear Admin, if you need any assistance with the Vine & Barrel Inventory Management System, our support team is here to help. Reach out to us via the following channels:
                </p>
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Department</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Technical Support</td>
                            <td>+254 701 234 567</td>
                        </tr>
                        <tr>
                            <td>Account Management</td>
                            <td>+254 722 456 789</td>
                        </tr>
                        <tr>
                            <td>System Administration</td>
                            <td>+254 733 890 123</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    Alternatively, email our support desk at <a href="mailto:adminsupport@vineandbarrel.com" className="contact-link">adminsupport@vineandbarrel.com</a>.
                </p>
                <p>
                    Our team is dedicated to ensuring smooth operation and prompt resolution of your concerns.
                </p>
            </div>
        </div>
    );
}
