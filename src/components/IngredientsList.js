// import React, { useState } from 'react'

function IngredientsList(props) {
    const ingredientsToChoose = props.ingredients.map((ingredient, index) => {
        <li key={index}>
            {ingredient.name}
            <button onClick={() => {
                props.addIngredients(ingredient)
            }}>
            ➕ 
            </button>
        </li>
    })

    return(
        <div>
            <h2>Choose Ingredients</h2>
            <ul>{ingredientsToChoose}</ul>
        </div>
    )
}

export default IngredientsList