

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
 



const Remaining = (props) => {

    const { expenses, budget, totalBudget } = useContext(AppContext);
    //const [totalBudget, setTotalBudget] = useState(budget);
    
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';


    const [newRemainBalance, setNewRemainBalance] = useState()

    
    console.log(props.totalBudget)

    
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £ {budget - totalExpenses} </span>
            <span> £ {props.totalBudget} </span>
        </div>
    );
};
export default Remaining;