import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button } from 'antd';
function App() {
  const [foodsSelected, setAddsFood] = useState(foods);

  //6. pasamos
  const handleAddsFood = (newFood) => {
    setAddsFood([...foodsSelected, newFood]);
  };
  return (
    <div className="App">
      <AddFoodForm handleAddsFood={handleAddsFood} />
      <Button> Hide Form / Add New Food </Button>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodsSelected.map((elem, i) => {
          return <FoodBox food={elem} key={i} />;
        })}
      </Row>
    </div>
  );
}

export default App;
