import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";
import items from "../public/Items.jsx";

import Navbar from "./navBar.jsx";
import Banner from "./Banner.jsx";
import AboutUs from "./AboutUs.jsx";
import Shop from "./Shop.jsx";
import ItemDetails from "./ItemDetails.jsx";
import Cart from "./Cart.jsx";
import Checkout from "./Checkout.jsx";
// function AddItemSection({ onAddItem }) {
//   return (
//     <div className="greyBack">
//       <h1 className="SectionHeader">Add Item</h1>
//       <AddForm onAddItem={onAddItem} />
//     </div>
//   );
// }

// function Customers() {
//   return (
//     <>
//       <h1 className="SectionHeader">Our top Customers</h1>
//       <Carousel />
//     </>
//   );
// }

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  console.log(cartItems);
  function handleAddToCart(cartItem, currentCart) {
    // Check if an item with the same productId, color, and size exists
    const existingItemIndex = currentCart.findIndex(
      (item) =>
        item.productId === cartItem.productId &&
        item.color === cartItem.color &&
        item.size === cartItem.size
    );

    if (existingItemIndex !== -1) {
      // If item exists, update quantity
      return currentCart.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + cartItem.quantity,
          };
        }
        return item;
      });
    } else {
      // If item doesn't exist, add new item
      return [...currentCart, cartItem];
    }
  }
  const addToCart = (newItem) => {
    setCartItems((currentCart) => handleAddToCart(newItem, currentCart));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/shop" element={<Shop items={items} />} />
        <Route
          path="/shop/:id"
          element={<ItemDetails item={items} AddtoCart={addToCart} />}
        />
        <Route
          path="/ShoppingCart"
          element={
            <Cart
              cartItem={cartItems}
              setCartItem={setCartItems}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/ShoppingCart/Checkout"
          element={<Checkout total={total} setCartItem={setCartItems} />}
        />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
