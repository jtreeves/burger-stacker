import './App.css'
import React, { useState } from 'react'
import BurgerStack from './components/BurgerStack'
import IngredientsList from './components/IngredientsList'
import list from './data/list'

function App() {
    const [ingredientsToDisplay, setIngredientsToDisplay] = useState(list)
    
    const [burgerToDisplay, setBurgerToDisplay] = useState([])

    const addBurgerIngredients = (ingredient) => {
        const updatedBurger = [...burgerToDisplay]
        updatedBurger.push(ingredient)
        setBurgerToDisplay(updatedBurger)
    }

    const clearBurgerIngredients = (event) => {
        event.preventDefault()
        setBurgerToDisplay([])
    }

    return (
        <div className='App-header'>
            <h1>Burger Stacker</h1>
            <IngredientsList
                ingredients={ingredientsToDisplay}
                addIngredients={addBurgerIngredients}
            />
            <BurgerStack
                burger={burgerToDisplay}
                clearBurger={clearBurgerIngredients}
            />
        </div>
    )
}

export default App