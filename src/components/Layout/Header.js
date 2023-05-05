import React from 'react'
import style from "./header.module.css"
import mealsImage from "../../assets/meals.jpg"
import { CartBtn } from './CartBtn'

const Header = (props) => {
  return (
    <>
    <header className={style.header}>
        <h1>React Meals</h1>
       <CartBtn />
    </header>
    <div className={style["main-image"]}>
        <img src={mealsImage} alt="MealsImage" />
    </div>
    </>
  )
}

export default Header