import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddWine() {
    const grapesOptions = [
        "Cabernet Sauvignon", "Chardonnay", "Grenache", "Mencia", "Merlot",
        "Pinot Gris", "Pinot Noir", "Sangiovese Merlot", "Sauvignon Blanc",
        "Syrah", "Tempranillo", "Zinfandel",
    ];

    const yearsOptions = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 1950 + i);

    const countriesOptions = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia",
        "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium",
        "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
        "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad",
        "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
        "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
        "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
        "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
        "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi",
        "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia",
        "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan",
        "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
        "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
        "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
        "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
        "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
        "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe",
    ];

    const [formData, setFormData] = useState({
        name: "",
        year: "",
        grapes: "",
        country: "",
        region: "",
        description: "",
        picture: null,
        price: "",
        stock: "",
    });

    const [validationErrors, setValidationErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "picture" ? files[0] : value,
        }));
    };

    const validateFields = () => {
        const errors = {};
        if (!formData.name) errors.name = "Name is required.";
        if (!formData.year) errors.year = "Year is required.";
        if (!formData.grapes) errors.grapes = "Grapes selection is required.";
        if (!formData.country) errors.country = "Country is required.";
        if (!formData.region) errors.region = "Region is required.";
        if (!formData.description) errors.description = "Description is required.";
        if (!formData.picture) errors.picture = "Picture is required.";
        if (!formData.price || isNaN(formData.price) || formData.price <= 0) {
            errors.price = "Price must be a positive number.";
        }
        if (!formData.stock || isNaN(formData.stock) || formData.stock < 0) {
            errors.stock = "Stock must be a non-negative number.";
        }
        setValidationErrors(errors);
        return Object.keys(errors).length === 0; // Return true if no errors
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateFields()) return;

        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });

        try {
            const response = await fetch("http://localhost:4000/products", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                navigate("/admin/products");
            } else if (response.status === 400) {
                const errorResponse = await response.json();
                alert(`Validation Errors: ${JSON.stringify(errorResponse)}`);
            } else {
                alert("Unable to add Wine!");
            }
        } catch (error) {
            alert("Unable to connect to server!");
        }
    };

    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-md-8 mx-auto rounded border p-4">
                    <h2 className="text-center mb-5">Add a New Wine</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="name"
                                    placeholder="Enter wine name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {validationErrors.name && (
                                    <small className="text-danger">{validationErrors.name}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Year</label>
                            <div className="col-sm-8">
                                <select
                                    className="form-control"
                                    name="year"
                                    value={formData.year}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Year</option>
                                    {yearsOptions.map((year, index) => (
                                        <option key={index} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                {validationErrors.year && (
                                    <small className="text-danger">{validationErrors.year}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Grapes</label>
                            <div className="col-sm-8">
                                <select
                                    className="form-control"
                                    name="grapes"
                                    value={formData.grapes}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Grapes</option>
                                    {grapesOptions.map((grape, index) => (
                                        <option key={index} value={grape}>
                                            {grape}
                                        </option>
                                    ))}
                                </select>
                                {validationErrors.grapes && (
                                    <small className="text-danger">{validationErrors.grapes}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Country</label>
                            <div className="col-sm-8">
                                <select
                                    className="form-control"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Country</option>
                                    {countriesOptions.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                                {validationErrors.country && (
                                    <small className="text-danger">{validationErrors.country}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Region</label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="region"
                                    placeholder="Enter region"
                                    value={formData.region}
                                    onChange={handleChange}
                                />
                                {validationErrors.region && (
                                    <small className="text-danger">{validationErrors.region}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Description</label>
                            <div className="col-sm-8">
                                <textarea
                                    className="form-control"
                                    name="description"
                                    rows="3"
                                    placeholder="Enter description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                                {validationErrors.description && (
                                    <small className="text-danger">{validationErrors.description}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Picture</label>
                            <div className="col-sm-8">
                                <input
                                    type="file"
                                    className="form-control"
                                    name="picture"
                                    onChange={handleChange}
                                />
                                {validationErrors.picture && (
                                    <small className="text-danger">{validationErrors.picture}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Price</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="price"
                                    placeholder="Enter price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                                {validationErrors.price && (
                                    <small className="text-danger">{validationErrors.price}</small>
                                )}
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Stock</label>
                            <div className="col-sm-8">
                                <input
                                    type="number"
                                    className="form-control"
                                    name="stock"
                                    placeholder="Enter stock quantity"
                                    value={formData.stock}
                                    onChange={handleChange}
                                />
                                {validationErrors.stock && (
                                    <small className="text-danger">{validationErrors.stock}</small>
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <button type="submit" className="btn mt-3" id="addWineButton">Add Wine</button>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <Link className="btn mt-3" id="deleteButton" to="/admin/products" role="button">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
