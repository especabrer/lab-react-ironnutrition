
import './App.css';
import foods from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm'
import SearchFood from './components/Search'


function App() {
  const [foodsList, setFoodsList] = useState(foods)
  const [foodsListPrint, setFoodsListPrint] = useState(foods)

  const addNewFood = (newFood) => {
   
    const updatedFoods = [...foodsList, newFood];
    console.log("updatedFoods: ", updatedFoods)

    setFoodsList(updatedFoods);
  };

  const searchFoodFunc = (searchLetters) => {
   
    let newFoodsList = foodsList

    let filteredFood = newFoodsList.filter(food => food.name.startsWith(searchLetters) )

    setFoodsListPrint(filteredFood);
  }

  return (

    <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    <SearchFood searchFood={searchFoodFunc}/>
     {foodsListPrint.map((foodsList)=> (
        <FoodBox foodsList={foodsList}/>
     ))}
    
   
     


    </div>
  );
}

export default App;
