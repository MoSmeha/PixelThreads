import { useState } from "react";
import { Search } from "lucide-react";
import { useEffect } from "react";
const SearchBar = ({ onSearch, initialQuery = "" }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  //dalayt se3a jareb zabto ma ken yezbato l styles b file la7al
  const styles = {
    container: {
      width: "100%",
      maxWidth: "30em",
      margin: "2em auto",
    },
    form: {
      position: "relative",
      width: "100%",
    },
    input: {
      width: "100%",
      padding: "8px 100px 8px 40px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "1px solid #ff3138",
      outline: "none",
      transition: "all 0.2s ease",
    },
    iconWrapper: {
      position: "absolute",
      left: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "#94a3b8",
    },
    button: {
      position: "absolute",
      right: "0",
      top: "0",
      bottom: "0",
      padding: "0 20px",
      backgroundColor: "#f75959",
      color: "white",
      border: "none",
      borderRadius: "0 8px 8px 0",
      cursor: "pointer",
      fontSize: "16px",
      transition: "background-color 0.2s ease",
    },
  };
  const addFocusStyles = (e) => {
    e.target.style.boxShadow = "0 0 0 2px #f75959";
    e.target.style.borderColor = "#D81C22";
  };
  const removeFocusStyles = (e) => {
    e.target.style.boxShadow = "none";
    e.target.style.borderColor = "#f75959";
  };
  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."
          style={styles.input}
          onFocus={addFocusStyles}
          onBlur={removeFocusStyles}
        />
        <div style={styles.iconWrapper}>
          <Search size={20} />
        </div>
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </div>
  );
};
export default SearchBar;
