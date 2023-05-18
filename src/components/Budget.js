

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


    return (
        <div className='alert alert-secondary budget-div'>
            <div className='div1'>
                Budget: {Currency}
            </div>
            <div className='div2'>
                <input
                    type='number'
                    id='cost'
                    step='10'
                    value={totalBudget}
                    style={{ marginLeft: '1rem' , size: 10}}
                    min={totalExpenses}
                    max={20000}
                    onChange={(e) => handeBudget(parseInt(e.target.value))}
                    className='total_budget'>
                </input>
            </div>
        </div>
    );
};
export default Budget;