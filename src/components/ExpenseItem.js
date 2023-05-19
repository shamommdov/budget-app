

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './style.css'


const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

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