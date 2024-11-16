import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Dashboard } from "./pages/dashboard";

import { NotFound } from "./pages/notfound";
import { ContactUs } from "./pages/contactus";
import { Profile } from "./pages/profile";
import { Signout } from "./pages/signout";
import ProductList from "./pages/admin/products/ProductList";
import AddWine from "./pages/admin/products/CreateProduct";
import EditWine from "./pages/admin/products/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-out" element={<Signout />} />
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/create" element={<AddWine />} />
        <Route path="/admin/products/edit/:id" element={<EditWine />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
