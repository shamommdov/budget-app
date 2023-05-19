

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const Budget = () => {
    const { expenses, budget, Currency, dispatch } = useContext(AppContext);
    const [totalBudget, setTotalBudget] = useState(budget);

    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handeBudget = (e) => {
        setTotalBudget(e)
        dispatch({
            type: 'SET_BUDGET',
            payload: e
        });
    }
    
    // const increaseValue = () => {
    //     Number(setTotalBudget(totalBudget + 10));
    // };
  
    // const decreaseValue = () => {
    //     Number(setTotalBudget(totalBudget + 10));
    // };
    

    return (
        <div className='alert alert-secondary budget-div'>
            <div>Budget:</div>
            <div className='div2'>
                <span>{Currency}</span>
                <input
                    type='number'
                    id='cost'
                    step='10'
                    value={totalBudget}
                    min={totalExpenses}
                    max={20000}
                    onChange={(e) => handeBudget(e.target.value)}
                    className='total_budget'>
                </input>
            </div>
            {/* <div>
                <button onClick={increaseValue}>Increase by 10</button>
                <button onClick={decreaseValue}>Decrease by 10</button>
            </div> */}
        </div>
    );
};
export default Budget;