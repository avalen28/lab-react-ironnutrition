import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h2>Food List</h2>
      {/* {foods.map((elem) => {
        return (
          <div>
            <p> {elem.name} </p>
            <img src={elem.image} width="100px" />
          </div>
        );
      })} */}
      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
