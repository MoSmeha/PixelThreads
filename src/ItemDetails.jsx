/* eslint-disable react/prop-types */
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./Itemdetails.css";
const ProductDetails = ({ item, AddtoCart }) => {
  const { id: itemId } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);

  const details = item.find((det) => det.id === Number(itemId));

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }

    const cartItem = {
      productId: details.id,
      id: uuidv4(),
      name: details.name,
      color: details.color,
      price: details.price,
      size: selectedSize,
      quantity: 1,
    };

    AddtoCart(cartItem);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="product-container">
      <div className="product-left-section">
        <img
          src={details.image.slice(1)}
          alt={details.name}
          className="product-image"
        />
      </div>

      <div className="product-right-section">
        <h1 className="product-name">{details.name}</h1>
        <p className="product-price">€{details.price}</p>
        <p className="product-description">{details.description}</p>

        <div className="product-info">
          <h3>Color</h3>
          <p>{details.color}</p>
        </div>

        <div className="product-info">
          <h3>Category</h3>
          <p>{details.category}</p>
        </div>

        <div className="product-sizes">
          <h3>Available Sizes</h3>
          <div className="sizes-container">
            {details.allSizes.map((size) => (
              <button
                key={size}
                className={`size-button ${
                  selectedSize === size ? "selected" : ""
                } ${!details.availableSizes.includes(size) ? "disabled" : ""}`}
                onClick={() => handleSizeSelection(size)}
                disabled={!details.availableSizes.includes(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-cart-button" onClick={handleAddToCart}>
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>
              ✖
            </button>
            <h2 className="cart-added">Item Added to Cart!</h2>
            <div className="modal-buttons">
              <Link to="/ShoppingCart">
                <button className="go-cart">Go to Cart</button>
              </Link>
              <Link to="/shop">
                <button className="continue-browsing" onClick={closeModal}>
                  Continue Browsing
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
