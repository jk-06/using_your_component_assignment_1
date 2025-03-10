// write the book component code here
import React from "react";

function BookCard({ name, image, genre, author }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px", textAlign: "center", width: "200px" }}>
      <img src={image} alt={name} style={{ width: "100px", height: "150px", marginBottom: "10px" }} />
      <h3>{name}</h3>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Author:</strong> {author}</p>
    </div>
  );
}

export default BookCard;

