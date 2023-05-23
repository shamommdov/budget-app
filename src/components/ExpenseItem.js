

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const ExpenseItem = (props) => {
    const { dispatch, Currency, expenses } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
        expenses.map((e) => {
            if(e.name === expense.name && e.cost === 0) {
                alert(`The expenses  of the ${e.name} department is 0 (ziro)`)
            }
        })
    }



    return (
            <tr className="expences-item">
                <td>{props.name}</td>
                <td >{Currency} {props.cost}</td>
                <td className='all-btns'>
                    <button className='inde_btns' onClick={event=> increaseAllocation(props.name)}> + </button>
                </td>
                <td className='all-btns'>
                    <button className='inde_btns' onClick={event=> decreaseAllocation(props.name)}> - </button>
                </td>
                <td className='all-btns'>
                    <button className='inde_btns-delete' onClick={handleDeleteExpense} > x </button>
                </td>
            </tr>

    );
};

export default ExpenseItem;