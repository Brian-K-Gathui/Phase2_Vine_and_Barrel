import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main application component
function App() {
  return (
    // Wrapping the application in a BrowserRouter to enable routing functionality
    <BrowserRouter>
      {/* Defining the routes for the application */}
      <Routes>
        {/* Fallback route for undefined paths, rendering a NotFound component */}
        <Route path="*" element={<NotFound />} />
        
        {/* Route for the dashboard, which serves as the homepage */}
        <Route path="/" element={<Dashboard />} />
        
        {/* Route for the user's profile page */}
        <Route path="/profile" element={<Profile />} />
        
        {/* Route for the contact us page */}
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* Route for the sign-out page */}
        <Route path="/sign-out" element={<Signout />} />
        
        {/* Route for viewing the list of products in the admin panel */}
        <Route path="/admin/products" element={<ProductList />} />
        
        {/* Route for creating a new wine product in the admin panel */}
        <Route path="/admin/products/create" element={<AddWine />} />
        
        {/* Route for editing an existing wine product using its ID */}
        <Route path="/admin/products/edit/:id" element={<EditWine />} />
      </Routes>
    </BrowserRouter>
  );
}

// Creating the root DOM node to render the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the App component within React's StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
