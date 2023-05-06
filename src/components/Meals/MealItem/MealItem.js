import React, { useContext } from 'react'
import styles from './mealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

    const meal = props.meal
    const price = `$${meal.price.toFixed(2)}`
    
const addToCartHandler=amount=>{
  cartCtx.addItem({
    id:props.id,
    name: meal.name,
    amount: amount,
    price: meal.price
  })
}

  return (
    <li className={styles.meal}>
        <div>
            <h3>{meal.name}</h3>
            <div className={styles.description}>{meal.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
        <MealItemForm id={props.id} onAddtoCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealItem