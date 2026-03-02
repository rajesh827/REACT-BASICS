import React from "react";

const ProductCard = ({ name, brand, price, image }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
        width: "250px",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "4px",
        }}
      />

      <h3>{name}</h3>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

function App() {
  const laptops = [
    {
      id: 1,
      brand: "Acer",
      name: "Acer Swift 3",
      price: 999,
      image: "/images/acer.jpg",
    },
    {
      id: 2,
      brand: "Dell",
      name: "XPS 13",
      price: 1200,
      image: "/images/dell.jpg",
    },
    {
      id: 3,
      brand: "lenovo",
      name: "ThinkPad X1 Carbon",
      price: 1100,
      image: "/images/lenovo.jpg",
    },
  ];

  return (
    <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {laptops.map((laptop) => (
          <ProductCard
            key={laptop.id}
            name={laptop.name}
            brand={laptop.brand}
            price={laptop.price}
            image={laptop.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
