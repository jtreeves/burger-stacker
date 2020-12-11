// import React, { useState } from 'react'

function BurgerStack(props) {
    const burgerIngredients = props.burger.map((ingredient, index) => {
        return <li key={index} style={{color: ingredient.color}}>{ingredient.name}</li>
    })
    
    return(
        <div>
            <h1>See Burger</h1>
            <ul>{burgerIngredients}</ul>
            <p><button onClick={props.clearBurger}>
                Clear Burger
            </button></p>
        </div>
    )
}

export default BurgerStack