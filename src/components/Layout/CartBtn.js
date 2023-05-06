import React, { useContext } from "react";
import style from "./cartbtn.module.css";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"
import CartContext from "../../store/cart-context";

export const CartBtn = (props) => {
const cartCtx = useContext(CartContext)

const numberOfCartItems = cartCtx.items.reduce((currentNumber, item)=>{
  return currentNumber + item.amount
}, 0)

const btnClasses = `${style.button}  ${style.bumb}`



  return (
    <button className={style.button} onClick={props.onClick} >
      <span className={style.icon}>
      <FiShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
