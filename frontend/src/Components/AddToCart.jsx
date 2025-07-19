import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux_Toolkit/Features/CartSlice";
import emptyCart from "../Images/Empty_Cart.png";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCartHandler = (itemId) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (confirmRemove) {
      dispatch(removeFromCart(itemId));
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-12">
          Your Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center">
            <img src={emptyCart} alt="Empty Cart" className="w-80 mb-6" />
            <p className="text-xl text-gray-600">
              Your cart is currently empty.
            </p>
            <Link
              to="/products"
              className="inline-block px-6 py-3 mt-8 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Return to Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center hover:shadow-lg transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-28 h-28 object-contain rounded-lg mb-4 sm:mb-0 sm:mr-6"
                />

                <div className="flex-1 w-full text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title || item.name}
                  </h3>
                  <p className="text-indigo-600 font-semibold text-lg mb-1">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Total: ₹{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCartHandler(item.id)}
                  className="mt-4 sm:mt-0 sm:ml-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition duration-200"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AddToCart;
