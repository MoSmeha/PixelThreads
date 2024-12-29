/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import "./Checkout.css";
const Checkout = ({ total, setCartItem }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setShowDialog(true);
    } else {
      alert("Please fill out all fields before proceeding.");
    }
  };

  const handleConfirmCheckout = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate loading
    setIsLoading(false);
    setIsComplete(true);
  };

  const handleReset = () => {
    setShowDialog(false);
    setIsComplete(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      country: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
    setCartItem([]);
  };

  return (
    <div className="container">
      <div className="section">
        <h1 className="heading">Checkout</h1>

        <form className="form" onSubmit={handleSubmit}>
          {/* Shipping Information */}
          <h2 className="subheading">Shipping Information</h2>

          <div className="row">
            <div className="formGroup">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="formGroup">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="formGroup">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="formGroup">
            <label className="label">Address</label>
            <input
              className="input"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="row">
            <div className="formGroup">
              <label className="label">City</label>
              <input
                className="input"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="formGroup">
              <label className="label">Country</label>
              <select
                className="select"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
              </select>
            </div>
          </div>

          <h2 className="subheading">Payment Details</h2>

          <div className="formGroup">
            <label className="label">Card Number</label>
            <input
              className="input"
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div className="row">
            <div className="formGroup">
              <label className="label">Expiry Date</label>
              <input
                className="input"
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                required
              />
            </div>

            <div className="formGroup">
              <label className="label">CVV</label>
              <input
                className="input"
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="summary">
            <div className="summaryRow">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="summaryRow">
              <span>Shipping</span>
              <span>$10.00</span>
            </div>
            <div className="summaryRow">
              <span>Tax</span>
              <span>$5.00</span>
            </div>
            <div className="summaryRow total">
              <span>Total</span>
              <span>${(total + 10.0 + 5.0).toFixed(2)}</span>
            </div>
          </div>

          <button className="button" type="submit">
            Complete Purchase
          </button>

          {showDialog && (
            <div className="overlay">
              <div className="dialog">
                <h2 className="dialogTitle">
                  {isComplete ? "Transaction Complete!" : "Confirm Purchase"}
                </h2>
                <p className="dialogContent">
                  {isComplete
                    ? "Thank you for your purchase!"
                    : `Are you sure you want to checkout? Total amount: $${(
                        total +
                        10.0 +
                        5.0
                      ).toFixed(2)}`}
                </p>
                <div className="dialogButtons">
                  {isComplete ? (
                    <button
                      className="button successButton"
                      onClick={handleReset}
                    >
                      Continue Shopping
                    </button>
                  ) : (
                    <>
                      <button
                        className="button cancelButton"
                        onClick={() => setShowDialog(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="button"
                        onClick={handleConfirmCheckout}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <Loader2 className="spinner" />
                        ) : (
                          "Confirm"
                        )}
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
export default Checkout;
