import { useState } from 'react';
import { Divider, Input } from 'antd';

const AddFoodForm = ({ handleAddsFood }) => {
  //1. creamos un nuevo elemento vacío
  const foodCreated = {
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  };
  //2. lo almacenamos porque será un useState
  const [newFood, setNewFood] = useState(foodCreated);

  //3. cada vez que se escriba en el input, va actualizando el valor de una key (name / value)
  const handleNewFood = (e) => {
    setNewFood((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  // 4. IMPORTANTE. Aquí se pone el prevent para que cuando se haga el "submit" no se borre
  //pasamos a la función "padre" la info del nuevo producto
  // devolvemos el modelo a estado inicial
  const handleSendInfo = (e) => {
    e.preventDefault();
    handleAddsFood(newFood);
    setNewFood(foodCreated);
  };

  //5. onChange y onSubmit para inputs y form. value asociado para no perderlo
  return (
    <div>
      <form action="" onSubmit={handleSendInfo}>
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          type="text"
          name="name"
          value={newFood.name}
          onChange={handleNewFood}
        />
        <label>Image</label>
        <Input
          type="text"
          name="image"
          value={newFood.image}
          onChange={handleNewFood}
        />
        <label>Calories</label>
        <Input
          type="number"
          name="calories"
          value={newFood.calories}
          onChange={handleNewFood}
        />

        <label>Servings</label>
        <Input
          type="number"
          name="servings"
          value={newFood.servings}
          onChange={handleNewFood}
        />

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
