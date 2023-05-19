

import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import './style.css'


const ExpenseList = () => {
    const { expenses } = useContext(AppContext);


    return (
      <table className='table'>
          <thead className="thead-light">
            <tr>
              <th scope="col" className='menu-names' >Department</th>
              <th scope="col" className='all-btns menu-names'>Allocated Budget</th>
              <th scope="col" className='all-btns menu-names'>Increase by 10</th>
              <th scope="col" className='all-btns menu-names'>Decrease by 10</th>
              <th scope="col" className='all-btns menu-names'>Clear the Budget</th>
            </tr>
          </thead>
          <tbody  className="dep-name">
            {expenses.map((expense) => (
                  <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
          </tbody>
      </table>
    );
};

export default ExpenseList;