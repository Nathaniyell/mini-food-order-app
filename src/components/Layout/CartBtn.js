import React, { useContext, useEffect, useState } from "react";
import style from "./cartbtn.module.css";
import { FiShoppingCart } from "@react-icons/all-files/fi/FiShoppingCart"
import CartContext from "../../store/cart-context";

export const CartBtn = (props) => {
  const [btnHighlighted, setBtnHighlighted] = useState(false)
  const cartCtx = useContext(CartContext)
  const {items} = cartCtx

const numberOfCartItems = items.reduce((currentNumber, item)=>{
  return currentNumber + item.amount
}, 0)

const btnClasses = `${style.button} ${btnHighlighted ? style.bumb : ""}`


useEffect(()=>{
  if(items.length === 0){
    return
  }
setBtnHighlighted(true)
const timer = setTimeout(()=>{
  setBtnHighlighted(false)
}, 300)
return ()=>{
  clearTimeout(timer)
}

}, [items])

  return (
    <button className={btnClasses} onClick={props.onClick} >
      <span className={style.icon}>
      <FiShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className={style.badge}>{numberOfCartItems}</span>
    </button>
  );
};
