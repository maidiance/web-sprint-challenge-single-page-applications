import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import OrderPizza from './components/OrderPizza';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  mushroom: false,
  sausage: false,
  onion: false,
  specialInstructions: '',
}

const initialFormErrors = {
  nameInput: '',
}

const initialPizzas = [];
const initialDisabled = true;


const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizzas = () => {
    // axios get call
    axios.get('https://reqres.in/api/orders')
      .then(resp => {
        console.log('response', resp);
      })
      .catch(err => {
        console.error(err);
      })
  }

  const postNewPizza = newPizza => {
    // axios post call
    axios.post('https://reqres.in/api/orders')
      .then(resp => {
        console.log('post', resp);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setFormValues(initialFormValues))
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      toppings: ['pepperoni', 'mushroom', 'sausage', 'onion'].filter(topping => !!formValues[topping]),
      specialInstructions: '',
    }
    postNewPizza(newPizza);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid));
  }, [formValues]);

  return (
    <>
      <Switch>
          <Route path='/pizza'>
              <OrderPizza />
          </Route>
          <Route path='/'>
              <Home />
          </Route>
      </Switch>
    </>
    
  );
};
export default App;
