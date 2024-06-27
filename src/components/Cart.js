import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions/cartActions";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4">
      <div className="flex">
        <Link to="/">
          <h2 className="text-2xl hover:underline">&#x2190;Back</h2>
        </Link>
        <h2 className="text-2xl font-bold mb-4 block m-auto">Shopping Cart</h2>
      </div>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="shadow rounded-lg p-6 max-w-full md:max-w-[600px] block m-auto">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-4"
            >
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-xl font-semibold">
                  Rs. {item.price} x {item.quantity}
                </p>
                <div className="flex space-x-4 items-center">
                  <div className="flex items-center mt-2 bg-green-400 hover:bg-blue-500 rounded-md font-bold text-white">
                    <button
                      onClick={() =>
                        dispatch(updateQuantity(item.id, item.quantity - 1))
                      }
                      className=" p-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(updateQuantity(item.id, item.quantity + 1))
                      }
                      className=" p-2"
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="bg-blue-500 hover:bg-pink-500 text-white p-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h3 className="text-xl font-bold mt-4">
            Total: Rs. {total.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
