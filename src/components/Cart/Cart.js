import React, {useContext} from "react";
import styles from "./cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";


const Cart = (props) => {
const cartCtx = useContext(CartContext)

const totalAmount = `$${cartCtx.totalAmount.toFixed(2)
}`

const removeCartItemHandler = id =>{

}
const addCartItemHandler = item =>{}


const hasItems = cartCtx.items.length > 0
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => {
        return <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
        onRemove={removeCartItemHandler.bind(null, item.id)}
        onAdd={addCartItemHandler.bind(null, item)}
        />;
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>Close</button>
       {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
