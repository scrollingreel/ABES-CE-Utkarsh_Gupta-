// Library.js
import React, { useState } from "react";
import Navbar from "./Navbar";
import Book from "./Book";

function Library() {
  const [cartCount, setCartCount] = useState(0);

  const books = [
    { id: 1, name: "The Alchemist", price: "₹299", img: "https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, name: "Rich Dad Poor Dad", price: "₹349", img: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg" },
    { id: 3, name: "Atomic Habits", price: "₹499", img: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg" },
  ];

  // function to handle cart addition
  const handleAddToCart = (count) => {
    setCartCount((prev) => prev + count);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", marginTop: "40px" }}>
        {books.map((b) => (
          <Book key={b.id} {...b} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
}

export default Library;
