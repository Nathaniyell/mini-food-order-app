import React, { useRef, useState } from 'react'
import styles from './mealItemForm.module.css'
import Input from '../../UI/Input'

const MealItemForm = (props) => {
  const [amntIsValid, setAmntIsValid]= useState(true)

  const amntInputRef = useRef()

const submitHandler = event =>{
  event.preventDefault()

  const enteredAmnt = amntInputRef.current.value;
  const enteredAmntNumber = +enteredAmnt

  if(enteredAmnt.trim().length===0 || enteredAmntNumber <1 || enteredAmntNumber > 5){
    setAmntIsValid(false)
    return
  }

  props.onAddtoCart(enteredAmntNumber)

}

  return (
    <form action="" className={styles.form} onSubmit={submitHandler}>
        <Input label="Amount"
        ref={amntInputRef}
         input={{          
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1"
        }} />
        <button>+ Add</button>
        {!amntIsValid && <p>Please enter a valid amount (1-5) </p>}
    </form>
  )
}

export default MealItemForm