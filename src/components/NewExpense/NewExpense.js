import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [ isEditing, setIsEditing ] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.round(Math.random().toString() * 100)
        };
        // console.log(expenseData)
        props.onAddExpense(expenseData)
        setIsEditing(false)
    }

    const isEditingHandler = () => {
      setIsEditing(true)
    }
    const stopEditingHandler = () => {
      setIsEditing(false)
    }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={isEditingHandler}>Add New Expenses</button>}
      {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;