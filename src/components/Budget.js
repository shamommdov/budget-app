
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const Budget = () => {
    const { expenses, budget, Currency, dispatch } = useContext(AppContext);
    const [total, setTotal] = useState(Number(budget));

    
    const totalExpenses = expenses.reduce((total, item) => {
        return Number(total = total + item.cost);
    }, 0);

    const handeBudget = (e) => {
        setTotal(e)
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
                    value={total}
                    min={totalExpenses}
                    max={20000}
                    onChange={(e) => handeBudget(Number(e.target.value))}
                    className='total_budget'>
                </input>
            </div>
            {/* <div>
                <button onClick={increaseValue}> + </button>
                <button onClick={decreaseValue}> - </button>
            </div> */}
        </div>
    );
};
export default Budget;