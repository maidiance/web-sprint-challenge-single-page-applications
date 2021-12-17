import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PizzaForm from './components/PizzaForm';

const App = () => {
  
  return (
    <>
      <Switch>
          <Route path='/pizza'>
              <PizzaForm />
          </Route>
          <Route path='/'>
              <Home />
          </Route>
      </Switch>
    </>
    
  );
};
export default App;
