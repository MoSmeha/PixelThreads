/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Card({ item }) {
  // Trim description to 100 characters
  const trimmedDescription =
    item.description.length > 40
      ? item.description.slice(0, 40) + "..."
      : item.description;

  return (
    <Link to={`/shop/${item.id}`}>
      <div className="card">
        <div className="imgBox">
          <img src={item.image} className="Cloth" alt={item.name} />
        </div>
        <div className="contentBox">
          <h3 className="name">{item.name}</h3>

          <p className="price">{item.price}€</p>

          <p className="description">{trimmedDescription}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
