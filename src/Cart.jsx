/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, Minus, Plus, Trash2 } from "lucide-react";
import "./Cart.css";
const Cart = ({ cartItem, setCartItem, setTotal, total }) => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Calculate total
  setTotal(cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0));

  const updateQuantity = (id, delta) => {
    setCartItem(
      cartItem.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const deleteItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if (cartItem.length === 0) {
      alert("Your cart is empty. Add items before proceeding to checkout.");
      return;
    }
    // Navigate to checkout page
    navigate("/ShoppingCart/Checkout");
  };

  return (
    <div className="cartWrapper">
      <div className="cartHeader">
        <ShoppingCart size={24} />
        <h1 className="cartTitle">Shopping Cart</h1>
      </div>

      <div className="itemList">
        {cartItem.map((item) => (
          <div key={item.id} className="cartItem">
            <div className="cartItemInfo">
              <h3 className="cartItemName">{item.name}</h3>
              <p className="cartItemPrice">${item.price}</p>
            </div>
            <div className="itemControls">
              <button
                className="adjustButton"
                onClick={() => updateQuantity(item.id, -1)}
                disabled={item.quantity === 0}
              >
                <Minus size={18} />
              </button>
              <span className="quantityInput">{item.quantity}</span>
              <button
                className="adjustButton"
                onClick={() => updateQuantity(item.id, 1)}
              >
                <Plus size={18} />
              </button>
              <button
                className="primaryButton removeButton"
                onClick={() => deleteItem(item.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cartFooter">
        <div className="cartTotal">Total: ${total.toFixed(2)}</div>
        <button className="primaryButton" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
