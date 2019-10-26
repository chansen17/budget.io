import React, { useState} from 'react';
import uuid from 'uuid/v4';
import './App.css';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Alert from './components/Alert';

const initialExpenses = [
  {id: uuid(), charge: 'rent', amount: 1500},
  {id: uuid(), charge: 'utility', amount: 150},
  {id: uuid(), charge: 'credit card', amount: 200}
];

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  console.log(expenses)

  return (
    <>
      <Alert/>
      <ExpenseForm/>
      <ExpenseList/>
    </>
  );
}

export default App;
