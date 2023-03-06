import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodsSelected, setAddsFood] = useState(foods);
  const [searchValue, setSearchValue] = useState('');

  //6. pasamos
  const handleAddsFood = (newFood) => {
    setAddsFood([...foodsSelected, newFood]);
  };
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = (deleteElem) => {
    setAddsFood([...foodsSelected].filter((elem) => elem.name !== deleteElem));
  };

  return (
    <div className="App">
      <AddFoodForm handleAddsFood={handleAddsFood} />
      <Button> Hide Form / Add New Food </Button>
      <Search handleSearch={handleSearch} searchValue={searchValue} />
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {[...foodsSelected]
          .filter((elem) =>
            elem.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((elem, i) => {
            return <FoodBox food={elem} key={i} handleDelete={handleDelete} />;
          })}
      </Row>
    </div>
  );
}

export default App;
