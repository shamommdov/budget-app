
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const ExpenseTotal = () => {
    const { expenses, Currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    return (
        <div className='alert alert-primary style-div'>
            <span className='span1'>Spent so far: </span>
            <span className='span2'>{Currency} {totalExpenses}</span>
        </div>
    );
};
export default ExpenseTotal;