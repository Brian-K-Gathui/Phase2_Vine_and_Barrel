import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Fetch products from the server
    const getProducts = () => {
        fetch("http://localhost:4000/products?_sort=id&_order=desc")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Failed to fetch products");
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                alert("Unable to get the data");
            });
    };

    useEffect(() => {
        getProducts();
    }, []);

    // Calculate pagination details
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Handlers for pagination buttons
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Wine Inventory</h2>

            <div className="row mb-3">
                <div className="col">
                    <Link
                        className="btn me-3"
                        to="/admin/products/create"
                        role="button"
                        id="addWineButton"
                    >
                        Add a Wine to Inventory
                    </Link>
                </div>
            </div>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Year</th>
                        <th>Grapes</th>
                        <th>Country</th>
                        <th>Region</th>
                        <th>Description</th>
                        <th>Picture</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedProducts.map((product, index) => (
                        <tr key={index}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.year}</td>
                            <td>{product.grapes}</td>
                            <td>{product.country}</td>
                            <td>{product.region}</td>
                            <td>{product.description}</td>
                            <td>
                                {product.picture ? (
                                    <img
                                        src={`http://localhost:4000/images/${product.picture}`}
                                        alt={product.name}
                                        height="100"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td>{product.price} KSH</td>
                            <td>{product.stock}</td>
                            <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                                <Link
                                    className="btn btn-sm me-3"
                                    id="editButton"
                                    to={`/admin/products/edit/${product.id}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-sm"
                                    id="deleteButton"
                                    onClick={() => {
                                        fetch(`http://localhost:4000/products/${product.id}`, {
                                            method: "DELETE",
                                        }).then(() => getProducts());
                                    }}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center">
                <span>Page {currentPage} of {totalPages}</span>
                <div>
                    <button
                        className="btn me-3"
                        id="previousButton"
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                    >
                        &larr; Prev
                    </button>
                    <button
                        className="btn"
                        id="nextButton"
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        Next &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
