import { useCart } from "../context/CartContext";
import "../styles/shop.css"; // optional: reuse your styles
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <h2 className="empty-cart">Your cart is empty</h2>
      ) : (
        <>
          <h2>Your Cart</h2>

          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="60" />

                <div className="cart-item-details">
                  <h4>{item.title}</h4>

                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  <p>₦{(item.price * item.quantity).toLocaleString()}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <h3>Total: ₦{totalPrice.toLocaleString()}</h3>

          <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </>
  );
}

export default Cart;