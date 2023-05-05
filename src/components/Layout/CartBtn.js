import React from "react";
import style from "./cartbtn.module.css";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"

export const CartBtn = (props) => {
  return (
    <button className={style.button}>
      <span className={style.icon}>
      <FiShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>3</span>
    </button>
  );
};
