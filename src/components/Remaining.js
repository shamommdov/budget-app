

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
 


const Remaining = (props) => {

    const { expenses, budget, Currency } = useContext(AppContext);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = parseInt(total + item.cost));
    }, 0);
    //const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';



    
    return (
        // <div className={`alert ${alertType}`}>
        //     <span>Remaining: {Currency} {parseInt(budget - totalExpenses)} </span>
        // </div>
        <div>
            Remaining: {Currency} {parseInt(budget - totalExpenses)}
        </div>
    );
};
export default Remaining;