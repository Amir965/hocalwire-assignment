import React from "react";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  return (
    
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <Link to={`/product/${product.id}`}>
        <img
          img
          src={product.image}
          alt={product.title}
          className="w-full h-64 object-contain"
        />
        <div className="px-6 py-4">
          <div className=" mb-2">{product.title}</div>
          <div className="mt-2 flex justify-between">
            <span className="text-xl font-semibold">Rs. {product.price}</span>
            <div className="bg-[#f5f5f5] px-2 py-1 rounded-md">
              <span className="font-semibold">
                <b className="text-blue-500">&#9733;</b>&nbsp;
                {product.rating.rate}
              </span>{" "}
              |
              <span className="font-semibold ml-1">{product.rating.count}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="flex justify-center items-center">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="bg-blue-500 text-white p-2 mt-4 rounded-lg hover:bg-pink-500 block mx-auto md:mx-0 md:ml-0"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
