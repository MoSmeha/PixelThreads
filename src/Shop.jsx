/* eslint-disable react/prop-types */
import Card from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";
function Shop({ items }) {
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.color.toLowerCase().includes(term)
    );
    setFilteredItems(filtered);
  };
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <div className="cardsContainer">
        {filteredItems.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
export default Shop;
