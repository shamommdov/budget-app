

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
 


const Remaining = (props) => {

    const { expenses, budget, Currency } = useContext(AppContext);
    const [ totalBudget ] = useState(budget)
   
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = Number(total + item.cost));
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';


    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {Currency} {Number(totalBudget - totalExpenses)} </span>
        </div>
    );
};
export default Remaining;