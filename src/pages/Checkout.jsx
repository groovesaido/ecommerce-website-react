import { useCart } from "../context/CartContext";

export default function Checkout() {
  const {
    getCartItemsWithProduct,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useCart();
  const cartItems = getCartItemsWithProduct();
  const total = getCartTotal();
  function placeOrder() {
    alert("Successful Order");
    clearCart();
  }
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Checkout</h1>
        <div className="checkout-container">
          <div className="checkout-items">
            <h2 className="checkout-section-title">Order Summary</h2>
            {cartItems.map((item) => (
              <div key={item.product.id} className="checkout-item">
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="checkout-item-image"
                />
                <div className="checkout-item-details">
                  <h3 className="checkout-item-name">{item.product.name}</h3>
                  <p className="checkout-item-price">
                    ksh{item.product.price} each
                  </p>
                </div>
                <div className="checkout-item-controls">
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                  <p className="checkout-item-total">
                    ksh{item.product.price * item.quantity}
                  </p>
                  <button
                    className="btn btn-secondary btn-small"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout-summary">
            <h2 className="checkout-section-title">Total</h2>
            <div className="checkout-total">
              <p className="checkout-total-label">Subtotal</p>
              <p className="checkout-total-value">ksh{total}</p>
            </div>
            <div className="checkout-total">
              <p className="checkout-total-label">Total</p>
              <p className="checkout-total-value checkout-total-final">
                ksh{total}
              </p>
            </div>
            <button
              className="btn btn-primary btn-large btn-block"
              onClick={placeOrder}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
