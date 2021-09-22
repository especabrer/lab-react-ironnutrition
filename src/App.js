
import './App.css';
import foods from "./foods.json";
import React, { useState } from 'react';
import FoodBox from "./components/FoodBox"
import AddFoodForm from './components/AddFoodForm'


function App() {
  const [foodsList, setFoodsList] = useState(foods)

  const addNewFood = (newFood) => {
   
    const updatedFoods = [...foodsList, newFood];
    console.log("updatedFoods: ", updatedFoods)

    setFoodsList(updatedFoods);
  };

  return (

    <div className="App">
    <AddFoodForm addNewFood={addNewFood}/>
     {foodsList.map((foodsList)=> (
        <FoodBox foodsList={foodsList}/>
     ))}
    
   
     


    </div>
  );
}

export default App;
