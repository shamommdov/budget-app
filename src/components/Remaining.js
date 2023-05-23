
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const Remaining = () => {

    const { expenses, budget, Currency } = useContext(AppContext);    
   

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = Number(total + item.cost));
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';



    return (
        <div className={`alert ${alertType} style-div`}>
            <span className='span1'> Remaining: </span>
            <span className='span2'> {Currency} {Number(budget - totalExpenses)} </span>
        </div>
    );
};
export default Remaining;