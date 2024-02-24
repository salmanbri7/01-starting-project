import React from "react";
import classes from "./CartButton.module.css";
import CartIcon from "../assests/CartIcon";
const CartButton = () => {
  return (
    <>
      <button className={classes.button}>
        <div className={classes.icon}>
          <CartIcon />
        </div>
        Cart
        <div className={classes.badge}>1</div>
      </button>
      {/* <span > </span> */}
    </>
  );
};

export default CartButton;
