import './App.css'
import BurgerStack from './components/BurgerStack'
import IngredientsList from './components/IngredientsList'
import ingredients from './data/ingredients'

function App() {
    const [ingredientsToDisplay, setIngredientsToDisplay] = useState(ingredients)
    const [burgerToDisplay, setBurgerToDisplay] = useState([])

    const handleBurgerIngredients = (ingredient) => {
        const updatedBurger = [...burgerToDisplay]
        updatedBurger.push(ingredient)
        setBurgerToDisplay(updatedBurger)
    }

    return (
        <div className='App-header'>
            <IngredientsList ingredients={ingredients} />
            <BurgerStack />
        </div>
    )
}

export default App