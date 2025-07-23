import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Redux_Toolkit/Features/ProductsSlice";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../Redux_Toolkit/Features/CartSlice";
import StarRating from "./StarRating";
import CreateProduct from "./ProductDetails/CreateProduct";

const Products2 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.products);
  const user = useSelector((state) => state.user);
  // console.log(user);
  // const cartItems = useSelector((state) => state.cart.items);

  const cartHandler = (product) => {
    if (!user.isLoggedIn) {
      alert("User is not logged in. Please Login!");
      navigate("/signin");
    } else {
      dispatch(addToCart(product));
      navigate("/add-to-cart");
      alert("Product has been added to cart");
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center text-indigo-600 justify-center text-2xl font-extrabold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center text-indigo-600 justify-center text-2xl font-extrabold">
        Error: {error}
      </div>
    );
  }

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-20 px-4">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-10">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-40 object-contain mb-4 mx-auto"
              />
              <h2 className="text-sm font-semibold text-gray-800 mb-2 truncate">
                {product.title}
              </h2>
              <p className="text-indigo-600 font-bold mb-2">
                ₹ {product.price}
              </p>
              <div className="text-indigo-600 font-bold mb-2">
                <StarRating rating={product.rating.rate} />
                <span>{product.rating.rate}</span>
              </div>
              <div className="flex justify-between gap-2 mt-auto">
                <Link
                  to="/add-to-cart"
                  className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-800 px-3 py-1 rounded"
                  // onClick={() => {
                  //   const isAlreadyAdded = cartItems.some(
                  //     (item) => item.id === product.id
                  //   );

                  //   if (isAlreadyAdded) {
                  //     alert("This product is already in the cart.");
                  //   } else {
                  //     dispatch(addToCart(product));
                  //     navigate("/add-to-cart");
                  //     alert("Product has been added to Cart");
                  //   }
                  // }}
                  // onClick={() => {
                  //   dispatch(addToCart(product));
                  //   navigate("/add-to-cart");
                  //   alert("Product has been added to cart");
                  // }}
                  onClick={(e) => {
                    e.preventDefault();
                    cartHandler(product);
                  }}
                >
                  Add to Cart
                </Link>
                <Link
                  to={`/products/${product.id}`}
                  className="bg-indigo-600 hover:bg-indigo-700 text-sm text-white px-3 py-1 rounded"
                >
                  Product Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products2;
