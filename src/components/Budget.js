

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Remaining from './Remaining';


const Budget = () => {

    const { expenses, budget, Currency } = useContext(AppContext);
    const [totalBudget, setTotalBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const remainingBalance = budget - totalExpenses
    const [newRemainBalance, setNewRemainBalance] = useState(remainingBalance)
    console.log("Budget K remain b: " + newRemainBalance)
    
    const handeBudget = (e) => {
        const value = Number(e.target.value)
        setTotalBudget(value)
        setNewRemainBalance(value - totalExpenses)
    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {Currency} {budget}</span>
            <input
                type='number'
                id='cost'
                value={totalBudget}
                style={{ marginLeft: '2rem' , size: 10}}
                min={totalExpenses}
                max={20000}
                onChange={handeBudget}>
            </input>
        </div>
    );
};
export default Budget;