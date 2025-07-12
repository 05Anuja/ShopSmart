import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Redux_Toolkit/Features/CartSlice";

const AddToCart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    const confirmRemove = window.confirm("Are you sure want delete the product?");
    if (confirmRemove) {
      dispatch(removeFromCart(item));
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-10">
          Your Cart
        </h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            Your cart is empty.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-5 flex flex-col sm:flex-row items-center hover:shadow-xl transition duration-300"
              >
                <img
                  src={item.image}
                  alt={item.title || item.name}
                  className="w-32 h-32 object-contain rounded-lg mb-4 sm:mb-0 sm:mr-6 "
                />

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {item.title || item.name}
                  </h3>
                  <p className="text-indigo-600 font-medium text-lg">
                    ₹{item.price}
                  </p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-500">
                    Total Price: {item.price * item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCartHandler(item.id)}
                  className="mt-4 sm:mt-0 sm:ml-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition"
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
