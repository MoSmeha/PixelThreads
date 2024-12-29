/* eslint-disable react/prop-types */
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid"; // Import uuidv4
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

    // Create a new cart item
    const cartItem = {
      productId: details.id, // Add productId to track the original product
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
    <div style={styles.container}>
      <div style={styles.leftSection}>
        <img
          src={details.image.slice(1)}
          alt={details.name}
          style={styles.image}
        />
      </div>

      <div style={styles.rightSection}>
        <h1 style={styles.name}>{details.name}</h1>
        <p style={styles.price}>€{details.price}</p>
        <p style={styles.description}>{details.description}</p>

        <div>
          <h3>Color</h3>
          <p>{details.color}</p>
        </div>

        <div>
          <h3>Category</h3>
          <p>{details.category}</p>
        </div>

        <div>
          <h3>Available Sizes</h3>
          <div style={styles.sizesContainer}>
            {details.allSizes.map((size) => (
              <button
                key={size}
                style={{
                  ...styles.sizeButton,
                  ...(selectedSize === size
                    ? { backgroundColor: "#edbc81", color: "white" }
                    : {}),
                  ...(details.availableSizes.includes(size)
                    ? {}
                    : styles.disabledSize),
                }}
                onClick={() => handleSizeSelection(size)}
                disabled={!details.availableSizes.includes(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button style={styles.addToCartButton} onClick={handleAddToCart}>
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>

      {showModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <button style={styles.closeButton} onClick={closeModal}>
              ✖
            </button>
            <h2 className="CartAdded">Item Added to Cart!</h2>
            <div style={styles.modalButtons}>
              <Link to="/ShoppingCart">
                <button className="gocart">Go to Cart</button>
              </Link>
              <Link to="/shop">
                <button style={styles.modalButton} onClick={closeModal}>
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
const styles = {
  container: {
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    gap: "40px",
    fontFamily: "system-ui, sans-serif",
    height: "calc(100vh - 60px)",
    boxSizing: "border-box",
    overflow: "hidden",
  },
  leftSection: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "#fbeacb",
  },
  rightSection: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    overflowY: "auto",
  },
  image: {
    width: "90%",
    maxHeight: "80%",
    aspectRatio: "1",
    objectFit: "cover",
    borderRadius: "8px",
    alignSelf: "center",
  },
  name: {
    fontSize: "32px",
    margin: "0",
    color: "#111",
  },
  price: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#111",
    margin: "0",
  },
  description: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#444",
    margin: "0",
  },
  sizesContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },
  sizeButton: {
    padding: "8px 16px",
    border: "1px solid #ddd",
    borderRadius: "4px",

    cursor: "pointer",
  },
  disabledSize: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
  addToCartButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "16px 32px",
    backgroundColor: "#edbc81",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  overlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1000",
  },
  modal: {
    width: "400px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "40px 20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },
  modalButtons: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
  },
  modalButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#f75959",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  },
};

export default ProductDetails;
