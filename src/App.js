import React, { useState } from "react";
import axios from 'axios';
import Header from './components/Header.js';
import NavLinks from './components/NavLinks.js';
import OrderPizza from './components/OrderPizza';
import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  nameInput: '',
  pizzaSize: '',
  pepperoni: false,
  mushroom: false,
  sausage: false,
  onion: false,
  specialInstructions: ''
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
        console.error(err)''
      })
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <>
      {
        <Header />
      }
      {
        <NavLinks />
      }
      
    </>
  );
};
export default App;
