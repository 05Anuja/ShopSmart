import React, { useEffect, useState, createContext } from "react";
import { useParams } from "react-router-dom";

export const CreateProducts = createContext();

const CreateProduct = ({ children }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <CreateProducts.Provider value={{ product, loading, error }}>
      {children}
    </CreateProducts.Provider>
  );
};

export default CreateProduct;
