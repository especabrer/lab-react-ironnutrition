
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
    let filteredFood = newFoodsList.filter(food => food.name.toLowerCase().includes(searchLetters.toLowerCase()) )

    setFoodsListPrint(filteredFood);
  }

  const clickToDelete = (name) => {
    
    let copyFoodsList = foodsList
    let updateList = copyFoodsList.filter(food => food.name !== name)
    console.log("updateListDelete : ", updateList)
    setFoodsList(updateList)
    setFoodsListPrint(updateList)
  }

  return (

    <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
    <SearchFood searchFood={searchFoodFunc}/>
     {foodsListPrint.map((foodsList)=> (
        <FoodBox foodsList={foodsList} clickToDelete={clickToDelete}/>
     ))}
    </div>
  );
}

export default App;
