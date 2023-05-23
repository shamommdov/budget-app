
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const Budget = () => {
    const { expenses, budget, Currency, dispatch } = useContext(AppContext);
    const [total_Budget, setTotal_Budget] = useState(Number(budget));
    

    const totalExpenses = expenses.reduce((total, item) => {
        return total = Number(total + item.cost);
    }, 0);
 
    const handeBudget = (event) => {
        setTotal_Budget(event)
        dispatch({
            type: 'SET_BUDGET',
            payload: event
        });
    }


    return (
        <div className='alert alert-secondary budget-div'>
            <div>Budget:</div>
            <div className='div2'>
                <span>{Currency}</span>
                <input
                    type='number'
                    id='cost'
                    step='10'
                    value={total_Budget}
                    min={totalExpenses}
                    max={20000}
                    onChange={(e) => handeBudget(Number(e.target.value))}
                    className='total_budget'>
                </input>
            </div>
        </div>
    );
};
export default Budget;