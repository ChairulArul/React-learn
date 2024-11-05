import React, { useState } from "react";

const ProductList = () => {
  // Data produk menggunakan useState
  const [products, setProducts] = useState([
    { id: 1, name: "Produk A", price: 50000 },
    { id: 2, name: "Produk B", price: 75000 },
    { id: 3, name: "Produk C", price: 100000 },
  ]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            marginBottom: "16px",
            textAlign: "center",
            maxWidth: "200px",
          }}
        >
          <h2>{product.name}</h2>
          <p>Harga: Rp {product.price.toLocaleString("id-ID")}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
