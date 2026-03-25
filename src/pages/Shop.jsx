import { useEffect, useState } from "react";
import { fetchProducts } from "../data/products";
import "../styles/shop.css";
import { useCart } from "../context/CartContext";

function Shop() {
  const [products, setProducts] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [addedStatus, setAddedStatus] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const increment = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decrement = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  const handleChange = (id, value) => {
    if (value < 1) return;
    setQuantities((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleAddToCart = (product) => {
    const qty = quantities[product.id] || 1;
    addToCart(product, qty);

    setAddedStatus((prev) => ({
      ...prev,
      [product.id]: true,
    }));

    setTimeout(() => {
      setAddedStatus((prev) => ({
        ...prev,
        [product.id]: false,
      }));
    }, 1000);
  };

  if (loading) return <p className="loading">Loading products...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <>
      <h1>Shop Page</h1>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "120px", height: "120px", objectFit: "contain" }}
            />

            <h3>{product.title}</h3>

            <p className="product-price">
              ₦{product.price.toLocaleString()}
            </p>

            <div className="quantity-control">
              <button onClick={() => decrement(product.id)}>-</button>

              <input
                type="number"
                min="1"
                value={quantities[product.id] || 1}
                onChange={(e) =>
                  handleChange(product.id, Number(e.target.value))
                }
              />

              <button onClick={() => increment(product.id)}>+</button>
            </div>

            <button
              className={`add-to-cart ${
                addedStatus[product.id] ? "added" : ""
              }`}
              onClick={() => handleAddToCart(product)}
              disabled={addedStatus[product.id]}
            >
              {addedStatus[product.id] ? "Added ✓" : "Add To Cart"}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Shop;