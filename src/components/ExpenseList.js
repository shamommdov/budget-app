

import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);
    
    return (
        <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col" >Department</th>
              <th scope="col" className='all-btns'>Allocated Budget</th>
              <th scope="col" className='all-btns'>Increase by 10</th>
              <th scope="col" className='all-btns'>Decrease by 10</th>
              <th scope="col" className='all-btns'>Clear the Budget</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;