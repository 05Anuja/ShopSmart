import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const api = "https://fakestoreapi.com/products/";
    fetch(api)
      .then((res) => res.json())
      .then((resData) => setProducts(resData));
  }, []);
  return (
    <>
      {
        products.map((product, idx) => {
          return (
            <div key={idx}>
              <h1>{product.title}</h1>
            </div>
          )
        })
      }
    </>
  );
};

export default Products;
