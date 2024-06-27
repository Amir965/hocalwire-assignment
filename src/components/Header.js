import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.items);
  return (
    <header className="bg-white text-black p-4 flex justify-between shadow items-center">
      <Link to="/" className="text-2xl font-bold">
        <img
          src={"/images/logo.png"}
          alt="E-commerce"
          width={50}
          height={50}
          className="rounded-full"
        />
      </Link>
      <Link to="/cart" className="text-lg flex relative mr-[30px]">
        <img src={"/images/cart.png"} alt="cart" width={50} height={50} />
        <span className="absolute right-[-15px] top-1">({cart.length})</span>
      </Link>
    </header>
  );
};

export default Header;
